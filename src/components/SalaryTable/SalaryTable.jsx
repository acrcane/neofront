import React from "react";
import {
    Table,
    THead,
    TBody,
    TFoot,
    TitleRaw,
    Raw,
    Col,
} from "./SalaryTable.styled";
import testJson from '../../JSON/test.json'

const test = testJson.workSchedule

export const SalaryTable = () => {
    return (
        <div>
            {console.log(test)}
            
            <Table>
                <THead>
                    <Col>
                        <TitleRaw>Day</TitleRaw>
                        <TitleRaw>Start</TitleRaw>
                        <TitleRaw>End</TitleRaw>
                    </Col>
                </THead>
                <TBody>
                    {test.map((t, i) => (
                        <Col key={i}>
                            <Raw>{t.day}</Raw>
                            <Raw>{t.startWork}</Raw>
                            <Raw>{t.endWork}</Raw>
                        </Col>
                    ))}
                </TBody>
                <TFoot>
                    <Col>
                        <TitleRaw colSpan={2}>Day</TitleRaw>
                        <TitleRaw>End</TitleRaw>
                    </Col>
                </TFoot>
            </Table>
        </div>
    );
};
