import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./profileStatus";



describe("ProfileStatus component", () => {
    test('Status from props should be in state', () => {
        const testStatusStr = 'Test status';
        const component = create(<ProfileStatus profileStatus={testStatusStr}/>);
        let statusInSpan = component.toJSON().children[0].children[1]
        expect(statusInSpan).toBe(testStatusStr)
    })

        test('test', async () => {
        const component = create(<ProfileStatus status= "testStatusStr"/>);
        const root = component.getInstance();
        let span = await root.findByType("span");
        expect(span.length).toBe(1);
    })
    })
