import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react';
import { Navigation } from './index';

describe('Navigation Component', (): void => {
    let renderResult: RenderResult;

    beforeEach((): RenderResult => renderResult = render(<Navigation/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    test('click dropdown activator', (): void => {
        const { queryByTestId } = renderResult;

        // Check to see if the dropdown body is not visible
        expect(queryByTestId('dropdown-body')).toBeFalsy();

        // Find and click on the dropdown activator
        const dropdownActivator: HTMLElement = queryByTestId('dropdown-activator');
        fireEvent.click(dropdownActivator);

        // Check to see if the dropdown body is visible
        const dropdownBody: HTMLElement = queryByTestId('dropdown-body');
        expect(dropdownBody).toBeTruthy();
    });

    test('open and close mobile menu', (): void => {
        const { queryByTestId } = renderResult;

        // Set the innerWidth to mobile
        global.innerWidth = 920;

        // Click on the mobile menu button
        const mobileMenuButton = queryByTestId('mobile-menu-button');
        fireEvent.click(mobileMenuButton);

        // Check to see if the mobile menu is truthy
        const mobileMenu = queryByTestId('mobile-menu');
        expect(mobileMenu).toBeTruthy();

        // Click on the close mobile menu button
        const closeMobileMenuButton = queryByTestId('close-mobile-menu-button');
        fireEvent.click(closeMobileMenuButton);

        // Reset innerWidth to desktop
        global.innerWidth = 1080;
    });

    afterEach(cleanup);
});
