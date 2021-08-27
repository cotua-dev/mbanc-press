import { cleanup, render, RenderResult } from '@testing-library/react';
import { InThePress } from './index';

describe('InThePress Component', (): void => {
    let renderResult: RenderResult;

    beforeAll((): RenderResult => renderResult = render(<InThePress/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    afterAll(cleanup);
});
