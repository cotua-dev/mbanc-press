import { Fragment } from 'react';
import styles from './InThePress.module.scss';
import { quotes } from './InThePress.initials';
import { Quote } from './InThePress.interfaces';

export function InThePress(): JSX.Element {
    return (
        <section className={styles['in-the-press']}>
            <div className={styles['jumbotron']}>
                <picture>
                    <source srcSet="/images/press/press_m.svg"/>
                    <img
                        className={styles['press-logo']}
                        src="/images/press/press_m.svg"
                        alt="Mbanc Press Logo"
                        loading="lazy"
                    />
                </picture>
            </div>
            <div className={styles['press-header']}>
                <picture>
                    <source srcSet="/images/press/press.svg"/>
                    <img
                        className={styles['press-header-logo']}
                        src="/images/press/press.svg"
                        alt="Mbanc Press Icon"
                        loading="lazy"
                    />
                </picture>
                <h1 className={styles['title']}>
                    <span>{`MBANC`}</span> In The Press
                </h1>
            </div>
            <iframe
                className="aspect-video mb-12 sm:mb-20 w-full sm:w-2/3"
                src="https://www.youtube-nocookie.com/embed/59ssQjGAvW4?controls=0&amp;start=695"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <iframe
                className="aspect-video mb-12 sm:mb-20 w-full sm:w-2/3"
                src="https://www.youtube-nocookie.com/embed/JqROPSULe1Q?controls=0&amp;start=703"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <iframe
                className="aspect-video mb-12 sm:mb-20 w-full sm:w-2/3"
                src="https://www.youtube-nocookie.com/embed/uTw7EEkDtJ4?controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            {quotes.map((quote: Quote) => (
                <Fragment key={quote.quoteURL}>
                    <hr className={styles['separator']}/>
                    <div className={styles['quote-wrapper']}>
                        <picture>
                            <source srcSet={quote.imagePath}/>
                            <img
                                className={`${styles['news-logo']} ${quote.newsOutlet === 'The Sun' || quote.newsOutlet === 'USA Today' || quote.newsOutlet === 'National Mortgage News' ? styles['usa-sun-fix'] : ''}`}
                                src={quote.imagePath}
                                alt={quote.imageAlt}
                                height={quote.imageHeight}
                                width={quote.imageWidth}
                                loading="lazy"
                            />
                        </picture>
                        <div className={styles['entire-quote']}>
                            <span className={styles['quote']}>{`???`}</span>
                            <blockquote className={styles['quote']} cite={quote.quoteURL}>
                                <strong className={styles['catch-phrase']}>{quote.catchPhrase}</strong>
                                <p className={styles['remainder']}>{quote.remainder}</p>
                            </blockquote>
                        </div>
                        <a
                            className={styles['quote-link']}
                            href={quote.quoteURL}
                            target="_blank"
                            rel="noreferrer"
                        >{quote.newsOutlet}</a>
                    </div>
                </Fragment>
            ))}
        </section>
    );
}
