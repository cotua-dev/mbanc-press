import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { mortgagePrograms } from '../Navigation/Navigation.initials';
import { MortgageProgram } from '../Navigation/Navigation.interfaces';

export function Footer(): JSX.Element {
    return (
        <footer className={styles['mbanc-footer']}>
            <div className={styles['content-wrapper']}>
                <div className={styles['mbanc-info-wrapper']}>
                    <div className={styles['mbanc-social']}>
                        <picture>
                            <source srcSet="/images/logo-inverted.svg"/>
                            <img
                                className={styles['mbanc-inverted-logo']}
                                src="/images/logo-inverted.svg"
                                alt="Mbanc Inverted Logo"
                                loading="lazy"
                            />
                        </picture>
                        <div className={styles['positively-simple-wrapper']}>
                            <span className={styles['positively']}>{`Positively`}</span>
                            <span className={styles['simple']}>{`Simple`}</span>
                        </div>
                        <address className={styles['mbanc-address']}>
                            {`1141 Highland Avenue, Suite C`}<br/>
                            {`Manhattan Beach, CA 90266`}
                        </address>
                        <div className={styles['mbanc-social-media']}>
                            <a
                                className={styles['social-media']}
                                href="https://www.facebook.com/gombanc"
                                aria-label="Mbanc Facebook Social Media Page Link"
                            ><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a
                                className={styles['social-media']}
                                href="https://www.instagram.com/gombanc"
                                aria-label="Mbanc Instagram Social Media Page Link"
                            ><FontAwesomeIcon icon={faInstagram}/></a>
                            <a
                                className={styles['social-media']}
                                href="https://www.linkedin.com/company/mbanc"
                                aria-label="Mbanc LinkedIn Social Media Page Link"
                            ><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a
                                className={styles['social-media']}
                                href="https://twitter.com/gombanc"
                                aria-label="Mbanc Twitter Social Media Page Link"
                            ><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>
                    <div className={styles['mbanc-contact']}>
                        <strong className={styles['subtitle']}>{`Contact Us`}</strong>
                        <div className={styles['contacts-wrapper']}>
                            <strong className={styles['heading']}>{`Corporate`}</strong>
                            <a
                                className={styles['contact']}
                                href="tel:+18888226418"
                                aria-label="Mbanc Corporate Phone Number"
                            >{`(888) 822-6418`}</a>
                            <a
                                className={styles['contact']}
                                href="mailto:contact@mbanc.com"
                                aria-label="Mbanc Corporate Email"
                            >{`contact@mbanc.com`}</a>
                        </div>
                        <div className={styles['contacts-wrapper']}>
                            <strong className={styles['heading']}>{`Sales`}</strong>
                            <a
                                className={styles['contact']}
                                href="tel:+18449181886"
                                aria-label="Mbanc Sales Phone Number"
                            >{`(844) 918-1886`}</a>
                            <a
                                className={styles['contact']}
                                href="mailto:sales@mbanc.com"
                                aria-label="Mbanc Sales Email"
                            >{`sales@mbanc.com`}</a>
                        </div>
                    </div>
                    <div className={styles['mbanc-company']}>
                        <strong>{`Company`}</strong>
                        <ul>
                            <li>
                                <a
                                    href="https://www.mbanc.com/about-us"
                                    aria-label="Mbanc About Us Page Link"
                                >{`About Us`}</a>
                            </li>
                            <li>
                                <a
                                    href="https://www.mbanc.com/licensing"
                                    aria-label="Mbanc Licenses Page Link"
                                >{`Licenses`}</a>
                            </li>
                            <li>
                                <a
                                    href="https://www.mbanc.com/privacy-policy"
                                    aria-label="Mbanc Privacy Policy Page Link"
                                >{`Privacy Policy`}</a>
                            </li>
                            <li>
                                <a
                                    href="https://www.mbanc.com/terms-of-use"
                                    aria-label="Mbanc Terms Of Use Page Link"
                                >{`Terms of Use`}</a>
                            </li>
                            <li>
                                <a
                                    href="https://blog.mbanc.com"
                                    aria-label="Mbanc Blog Link"
                                >{`Blog`}</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles['mbanc-programs']}>
                        <strong>{`Mortgage Programs`}</strong>
                        <ul>
                            {mortgagePrograms.map((mortgageProgram: MortgageProgram) => (
                                <li key={mortgageProgram.programName}>
                                    <a
                                        href={mortgageProgram.link}
                                        aria-label={mortgageProgram.ariaLabel}
                                    >{mortgageProgram.programName}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <p className={styles['licensing']}>
                    {`MBANC, A MORTGAGE LENDER. MORTGAGE BANK OF CALIFORNIA DBA MBANC. NMLS ID # 38232 (NMLS CONSUMER ACCESS SITE). ARIZONA MORTGAGE BANKER LICENSE - LICENSE # 0943170. CALIFORNIA - DBO FINANCE LENDERS LAW LICENSE - LICENSE # 60DBO45280. CALIFORNIA - DRE REAL ESTATE CORPORATION LICENSE ENDORSEMENT - LICENSE # 01521655. COLORADO MORTGAGE COMPANY REGISTRATION - REGULATED BY THE DIVISION OF REAL ESTATE. CONNECTICUT MORTGAGE LENDER LICENSE - LICENSE # ML-38232. DISTRICT OF COLUMBIA MORTGAGE DUAL AUTHORITY LICENSE - LICENSE # MLB38232. FLORIDA MORTGAGE LENDER LICENSE - LICENSE # MLD1287. GEORGIA MORTGAGE LENDER LICENSE/REGISTRATION - LICENSE # 48090 (DBA MBOC HOME LOANS). HAWAII MORTGAGE LOAN ORIGINATOR COMPANY LICENSE - LICENSE # HI-38232 (DBA MBOC HOME LOANS). IDAHO MORTGAGE BROKER/LENDER LICENSE - LICENSE # MBL-2080038232. ILLINOIS RESIDENTIAL MORTGAGE LICENSE - LICENSE # MB.6761396. MARYLAND MORTGAGE LENDER LICENSE - LICENSE # 21870. MICHIGAN 1ST MORTGAGE BROKER/LENDER LICENSE - LICENSE # FL0022526. NEW JERSEY RESIDENTIAL MORTGAGE LENDER LICENSE - REGULATED BY THE DEPARTMENT OF BANKING & INSURANCE. NORTH CAROLINA MORTGAGE LENDER LICENSE - LICENSE # L-183446. OHIO RESIDENTIAL MORTGAGE LENDING ACT CERTIFICATE OF REGISTRATION - LICENSE # RM.804374.000. OREGON MORTGAGE LENDING LICENSE - LICENSE # ML-5804. PENNSYLVANIA MORTGAGE LENDER LICENSE - LICENSE # 71003. SOUTH CAROLINA-BFI MORTGAGE LENDER / SERVICER LICENSE - LICENSE # MLS - 38232, MLS - 38232 OTN #1 (DBA MBOC HOME LOANS). TENNESSEE MORTGAGE LICENSE - LICENSE # 178934. TEXAS - SML MORTGAGE BANKER REGISTRATION - REGULATED BY THE DEPARTMENT OF SAVINGS AND MORTGAGE LENDING. UTAH MORTGAGE ENTITY LICENSE - LICENSE # 10877496, 10826912, 10827018. VIRGINIA LENDER LICENSE - LICENSE # MC-6638. WASHINGTON CONSUMER LOAN COMPANY LICENSE - LICENSE # CL-38232. WYOMING MORTGAGE LENDER/BROKER LICENSE – LICENSE # 3912. `}
                    <a href="https://www.nmlsconsumeraccess.org/" target="_blank" rel="noopener noreferrer">{`NMLS CONSUMER ACCESS SITE`}</a>
                    {` NEITHER MBANC NOR MORTGAGE BANK OF CALIFORNIA IS A CHARTERED BANK OR TRUST COMPANY, OR DEPOSITORY INSTITUTION. THEY ARE NOT AUTHORIZED TO ACCEPT DEPOSITS OR TRUST ACCOUNTS AND ARE NOT LICENSED OR REGULATED BY ANY STATE OR FEDERAL BANKING AUTHORITY. APR of 6.627% BASED ON AN INVESTMENT PROPERTY CASH OUT 60% LTV WITH A FICO OF 688 ON A POSITIVE DEBT SERVICE TRANSACTION WITH 1% ORIGINATION FEE WITH A LOAN AMOUNT OF 177K APR OF 7.757% BASED ON A PRIMARY PROPERTY CASH OUT AT 55% LTV WITH A FICO OF 652 ON A 24 MO BUSINESS BANK STATEMENT TRANSACTION WITH A $9000 ORIGINATION FEE WITH A LOAN AMOUNT OF 605K APR OF 7.275% BASED ON AN INVESTMENT PROPERTY PURCHASE AT 75% LTV WITH A FICO OF 762 ON A NEGATIVE DEBT SERVICE TRANSACTION WITH 1.25% ORIGINATION FEE WITH A LOAN AMOUNT OF 1,269,750 APR OF 5.298% BASED ON A PRIMARY PROPERTY PURCHASE AT 80% LTV WITH A FICO OF 773 ON A 12 MO BANK STATEMENT TRANSACTION WITH A 2% ORIGINATION FEE WITH A LOAN AMOUNT OF 184K THE ABOVE INFORMATION IS BASED ON SPECIFIC SCENARIONS. RATES AND FEES ARE SUBJECT TO CHANGE AND BORROWERS MUST MEET GUIDELINE CRITERIA TO QUALIFY.`}
                </p>
            </div>
        </footer>
    );
}
