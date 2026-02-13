import { useTranslation } from 'react-i18next';
import './Experience.css';

const Experience = () => {
    const { t } = useTranslation();
    const experienceKeys = [0, 1, 2, 3, 4, 5];

    return (
        <div className='min-h-0'>
            <div className='timeline'>
                {/* Línea vertical central */}
                <div className='timeline-line' aria-hidden="true" />
                {experienceKeys.map((index) => {
                    const isLeft = index % 2 === 0;
                    const date = t(`exp${index}Date`);
                    const name = t(`exp${index}Name`);
                    const description = t(`exp${index}Desc`);
                    return (
                        <div
                            id={`experience-${index}`}
                            className='timeline-row'
                            key={index}
                        >
                            <div className={`timeline-content ${isLeft ? 'timeline-content-left' : 'timeline-content-empty'}`}>
                                {isLeft && (
                                    <div className="content text-[#666] font-light text-xs md:text-sm">
                                        <h4 className="font-medium text-[#444]">{date}</h4>
                                        <h4 className="font-medium text-[#555] mt-1">{name}</h4>
                                        <p className="mt-1 text-[#777] text-[11px] md:text-xs">{description}</p>
                                    </div>
                                )}
                            </div>
                            <div className='timeline-marker'>
                                <div className='timeline-dot' />
                            </div>
                            <div className={`timeline-content ${!isLeft ? 'timeline-content-right' : 'timeline-content-empty'}`}>
                                {!isLeft && (
                                    <div className="content text-[#666] font-light text-xs md:text-sm">
                                        <h4 className="font-medium text-[#444]">{date}</h4>
                                        <h4 className="font-medium text-[#555] mt-1">{name}</h4>
                                        <p className="mt-1 text-[#777] text-[11px] md:text-xs">{description}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Experience;
