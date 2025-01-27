import React, { ReactNode, useState, useEffect } from 'react';
import Styles from './style.module.css';

interface AccordionProps {
    hoveredTitle: string;
    title: string;
    children: ReactNode;
    onTitleHover: (title: string) => void; // callback
    targetId: string; // ID to navigate to
}

const AccordionItem: React.FC<AccordionProps> = ({ hoveredTitle, title, children, onTitleHover, targetId }) => {
    const [isScrolling, setIsScrolling] = useState(false); // 检测页面是否在滚动
    let scrollTimeout: NodeJS.Timeout;

    // 检测页面滚动
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(true);
            clearTimeout(scrollTimeout); // 清除之前的定时器
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false); // 滚动停止后解除限制
            }, 30); // 30ms后认为滚动停止
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout); // 清除定时器
        };
    }, []);

    const handleMouseEnter = () => {
        if (!isScrolling) {
            onTitleHover(title); // 仅在未滚动时更新 hoveredTitle
        }
    };

    const handleTitleClick = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // 平滑滚动到目标
        }
    };

    return (
        <div className={Styles.AccordionItem} onMouseEnter={handleMouseEnter}>
            {/* Accordion Item */}
            <div
                className={`${Styles.AccordionTitle}${hoveredTitle === title ? ` ${Styles.bold}` : ''}`}
                onClick={handleTitleClick} // 点击滚动到目标
            >
                {title}
            </div>

            <div
                className={`${Styles.AccordionContent} ${hoveredTitle === title ? Styles.Open : ''}`} // 切换内容显示
            >
                <div className={Styles.ContentInner}>{children}</div>
            </div>
        </div>
    );
};

export default AccordionItem;
