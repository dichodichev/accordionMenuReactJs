import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const AccordionMenu = () => {

    const data = [
    { key: 'keyName1', name: 'Lorem ipsum dolor sit amet, consectetur? x1 ', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.', status: false, },
    { key: 'keyName2', name: 'Lorem ipsum dolor sit amet, consectetur? x2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.', status: false, }, 
    { key: 'keyName3', name: 'Lorem ipsum dolor sit amet, consectetur? x3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.', status: false, }, 
    { key: 'keyName4', name: 'Lorem ipsum dolor sit amet, consectetur? x4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.', status: false, }, 
    { key: 'keyName5', name: 'Lorem ipsum dolor sit amet, consectetur? x5', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.', status: false, },
    { key: 'keyName6', name: 'Lorem ipsum dolor sit amet, consectetur? x6 ', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.', status: false, },
    { key: 'keyName7', name: 'Lorem ipsum dolor sit amet, consectetur? x7', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.', status: false, }, 
    { key: 'keyName8', name: 'Lorem ipsum dolor sit amet, consectetur? x8', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.', status: false, }, 
    ]

    const [ isActive, setIsActive ] = useState(false);


    const isVisible = ( key ) => {
        setIsActive(isActive === key ? false : key );
    };

    const itemsPerGroup = 4;
    const totalGroups = Math.ceil(data.length / itemsPerGroup);


    return (
    <>
    <section className="section">
        <div className="div1">
            <h1>Accordion Menu!</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam corrupti quae ipsam nostrum et provident .</p>
        </div>
        <div className="div2">
        {Array.from({ length: totalGroups }).map((_, groupIndex) => (
            <div key={groupIndex}>
            {data.slice(groupIndex * itemsPerGroup, (groupIndex + 1) * itemsPerGroup).map((el) => (
                <ul key={el.key} className={el.key}>
                {isActive === el.key ? (
                <>
                    <li onClick={() => isVisible(el.key)} style={{ color: '#2266cb' }}>
                    {el.name}
                    <button onClick={() => isVisible(el.key)}>
                        <FontAwesomeIcon className="arrow" size="xs" icon={faChevronUp} />
                    </button>
                    <p className="trans">{el.content}</p>
                    </li>
                </>
                ) : (
                <>
                    <li onClick={() => isVisible(el.key)}>
                    {el.name}
                    <button onClick={() => isVisible(el.key)}>
                        <FontAwesomeIcon className="arrow" size="xs" icon={faChevronDown} />
                    </button>
                    <p className="hidden">{el.content}</p>
                    </li>
                </>
                )}
            </ul>
            ))}
        </div>
        ))}
    </div>
    </section>
    </>
);
};

export default AccordionMenu;
