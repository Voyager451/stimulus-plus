import React from 'react';

import { useSelector, shallowEqual } from 'react-redux';

import {
    Card, CardBody, CardHeader, CardText, Col, Row, Alert,
} from 'reactstrap';

const useState = () => {
    const state = useSelector(
        ({
            filingStatus, incomeAmount, numOfChildren, dependentStatus,
        }) => {
            return {
                filingStatus,
                numOfChildren,
                incomeAmount,
                dependentStatus,
            };
        },
        shallowEqual,
    );

    return { state };
};

const EstimateCard = () => {

    const { state } = useState();

    const filingStatusType = {
        SINGLE: 1,
        MARRIED: 2,
        HEAD_OF_HOUSEHOLD: 3,
    };

    function parseAmountForDisplay(amount) {
        // Can't get less than $0 unless :yin: is President
        let amountOutput = amount;
        if (amount < 1) {
            amountOutput = 0;
        }
        return amountOutput;
    }

    function getAmounts(data) {

        // Default values for filing status Single
        let baseAmount = 1200;
        let excessLimit = 75000;
        let maxLimit = 99000;

        if (data.filingStatus === filingStatusType.HEAD_OF_HOUSEHOLD) {
            baseAmount = 1200;
            excessLimit = 112500;
            maxLimit = 136500;
        } else if (data.filingStatus === filingStatusType.MARRIED) {
            baseAmount = 2400;
            excessLimit = 150000;
            maxLimit = 198000;
        }

        let amountForIncome = baseAmount;
        let amountForChildren = (data.numOfChildren * 500);
        const startingTotal = amountForIncome + amountForChildren;
        let excessIncomeDiff = 0;

        // Subtract $5 for every $100 in excess income
        if (data.incomeAmount > excessLimit) {
            const excessIncomeAmnt = data.incomeAmount - excessLimit;
            excessIncomeDiff = (excessIncomeAmnt / 100) * 5;
        }

        let totalAmount = (startingTotal - excessIncomeDiff);

        // This is probably not 100% correct way to do things but not a big deal I think
        // Main goal is to show how much parents get for their children
        if (data.incomeAmount > excessLimit) {
            amountForIncome = totalAmount - amountForChildren;
        }
        if (data.incomeAmount > maxLimit) {
            amountForIncome = 0;
            amountForChildren = totalAmount;
        }

        if (data.dependentStatus === 1) {
            // You don't get anything if you were claimed as a dependent
            // Narrator: ughhh
            totalAmount = 0;
            amountForIncome = 0;
            amountForChildren = 0;
        }

        return {
            totalAmount,
            amountForIncome,
            amountForChildren,
        };
    }

    const allAmounts = getAmounts(state);
    const amountForIncome = parseAmountForDisplay(allAmounts.amountForIncome);
    const amountForChildren = parseAmountForDisplay(allAmounts.amountForChildren);
    const totalAmount = parseAmountForDisplay(allAmounts.totalAmount);

    return (
        <div>
            <Card>
                <CardHeader>Payment Estimate</CardHeader>
                <CardBody>
                    <Row className={ 'your-money-cards justify-content-center' }>
                        <Col sm="3 align-self-center">
                            <Card body className="your-money-total">
                                <h5>Total 💵</h5>
                                <CardText className={ 'total-stimulus' }>${totalAmount}</CardText>
                            </Card>
                        </Col>

                        <Col sm="1 align-self-center">
                            <span className={ 'your-money-sign' }>=</span>
                        </Col>

                        <Col sm="3 align-self-center">
                            <Card body className={ '' }>
                                <h6 className={ 'your-money-info-title' }>Based on Income</h6>
                                <CardText className={ 'your-money-info-amount' }>${amountForIncome}</CardText>
                            </Card>
                        </Col>

                        <Col sm="1 align-self-center">
                            <span className={ 'your-money-sign' }>+</span>
                        </Col>

                        <Col sm="3 align-self-center">
                            <Card body className={ '' }>
                                <h6 className={ 'your-money-info-title' }>Based on Children</h6>
                                <CardText className={ 'your-money-info-amount' }>${amountForChildren}</CardText>
                            </Card>
                        </Col>

                    </Row>

                </CardBody>
            </Card>

        </div>
    );
};

export default EstimateCard;
