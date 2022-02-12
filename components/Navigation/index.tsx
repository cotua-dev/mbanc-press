import { useState } from 'react';
import { animated, config, useTransition } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Navigation.module.scss';
import { mortgagePrograms } from './Navigation.initials';
import { MortgageProgram } from './Navigation.interfaces';

export function Navigation(): JSX.Element {
    const [dropdown, setDropdown] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const dropdownTransitions = useTransition(dropdown, {
        config: config.stiff,
        from: { top: '4%', opacity: 0 },
        to: { top: '8%', opacity: 1 },
        leave: { top: '4%', opacity: 0 },
        enter: { top: '8%', opacity: 1 },
        reverse: true,
    });
    const mobileMenuTransitions = useTransition(mobileMenu, {
        config: config.stiff,
        from: { top: '-2%', opacity: 0 },
        to: { top: '1%', opacity: 1 },
        leave: { top: '-2%', opacity: 0 },
        enter: { top: '1%', opacity: 1 },
        reverse: true,
    });

    return (
        <nav className={styles['mbanc-navigation']}>
            <div className={styles['navigation-content']}>
                <a href="https://www.mbanc.com" aria-label="Home Mbanc Page Link">
                    <picture>
                        <source srcSet="/images/logo.svg"/>
                        <img
                            className={styles['mbanc-logo']}
                            src="/images/logo.svg"
                            alt="Mbanc Logo"
                            loading="lazy"
                        />
                    </picture>
                </a>
                <div
                    className={styles['dropdown-activator']}
                    data-testid="dropdown-activator"
                    onClick={() => setDropdown(!dropdown)}
                >
                    <p className={styles['dropdown-text']}>
                        {`Loan Programs`}
                        <FontAwesomeIcon
                            className={styles['caret-down']}
                            icon={faCaretDown}
                        />
                    </p>
                    {dropdownTransitions(
                        (dropdownStyles, dropdown) => dropdown &&
                        <animated.div
                            style={dropdownStyles}
                            data-testid="dropdown-body"
                            className={styles['dropdown-body']}
                        >
                            <ul className={styles['links-list']}>
                                {mortgagePrograms.map((mortgageProgram: MortgageProgram) => (
                                    <li key={mortgageProgram.programName} className={styles['link-list-item']}>
                                        <a
                                            className={styles['link']}
                                            href={mortgageProgram.link}
                                            aria-label={mortgageProgram.ariaLabel}
                                        >{mortgageProgram.programName}</a>
                                    </li>
                                ))}
                            </ul>
                        </animated.div>
                    )}
                </div>
                <a
                    className={styles['regular-link']}
                    href="https://www.mbanc.com/licensing"
                    aria-label="Licenses Mbanc Page Link"
                >{`Licenses`}</a>
                <a
                    className={styles['regular-link']}
                    href="https://www.mbanc.com/about-us"
                    aria-label="About Us Mbanc Page Link"
                >{`About Us`}</a>
                <a
                    className={styles['regular-link']}
                    href="https://press.mbanc.com"
                    aria-label="Press Mbanc Page Link"
                >{`Press`}</a>
                <a
                    className={styles['regular-link']}
                    href="https://blog.mbanc.com"
                    aria-label="Blog Mbanc Page Link"
                >{`Blog`}</a>
                <a
                    className={styles['apply-now']}
                    href="https://www.mbanc.com/non-qm-bank-statement-jumbo"
                    aria-label="Bank Statement Jumbo Mbanc Page Link"
                >{`Apply Now`}</a>
            </div>
            <button
                className={styles['mobile-menu-button']}
                type="button"
                aria-label="Mbanc Mobile Menu Open Button"
                data-testid="mobile-menu-button"
                onClick={() => setMobileMenu(!mobileMenu)}
            >
                <FontAwesomeIcon icon={faBars}/>
            </button>
            {mobileMenuTransitions(
                (mobileMenuStyles, mobileMenu) => mobileMenu &&
                <animated.div
                    style={mobileMenuStyles}
                    data-testid="mobile-menu"
                    className={styles['mobile-menu']}
                >
                    <div className={styles['mobile-menu-header']}>
                        <strong className={styles['title']}>{`Navigation`}</strong>
                        <button
                            className={styles['close-mobile-menu-button']}
                            type="button"
                            aria-label="Mbanc Mobile Menu Close Button"
                            data-testid="close-mobile-menu-button"
                            onClick={() => setMobileMenu(false)}
                        >
                            <FontAwesomeIcon icon={faTimes}/>
                        </button>
                    </div>
                    <div className={styles['mobile-links-wrapper']}>
                        <ul className={styles['links-list']}>
                            <li className={styles['list-item']}>
                                <a
                                    className={styles['link']}
                                    href="https://www.mbanc.com"
                                    aria-label="Home Mbanc Page Link"
                                >{`Home`}</a>
                            </li>
                            <li className={styles['list-item']}>
                                <a
                                    className={styles['link']}
                                    href="https://www.mbanc.com/about-us"
                                    aria-label="About Us Mbanc Page Link"
                                >{`About Us`}</a>
                            </li>
                            <li className={styles['list-item']}>
                                <a
                                    className={styles['link']}
                                    href="https://www.mbanc.com/licensing"
                                    aria-label="Licenses Mbanc Page Link"
                                >{`Licenses`}</a>
                            </li>
                            <li className={styles['list-item']}>
                                <a
                                    className={styles['link']}
                                    href="https://press.mbanc.com"
                                    aria-label="Press Mbanc Page Link"
                                >{`Press`}</a>
                            </li>
                            <li className={styles['list-item']}>
                                <a
                                    className={styles['link']}
                                    href="https://blog.mbanc.com"
                                    aria-label="Blog Mbanc Page Link"
                                >{`Blog`}</a>
                            </li>
                            {mortgagePrograms.map((mortgageProgram: MortgageProgram) => (
                                <li key={mortgageProgram.programName} className={styles['list-item']}>
                                    <a
                                        className={styles['link']}
                                        href={mortgageProgram.link}
                                        aria-label={mortgageProgram.ariaLabel}
                                    >{mortgageProgram.programName}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles['apply-now-wrapper']}>
                        <a
                            className={styles['apply-now']}
                            href="https://www.mbanc.com/non-qm-bank-statement-jumbo"
                            aria-label="Bank Statement Jumbo Mbanc Page Link"
                        >{`Apply Now`}</a>
                    </div>
                </animated.div>
            )}
        </nav>
    );
}
