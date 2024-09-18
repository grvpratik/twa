import React from 'react'

interface SVGProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    filled?: boolean
}

export const HomeSVG: React.FC<SVGProps> = ({
    className = 'size-5',
    fill = 'none',
    stroke = 'currentColor',
    strokeWidth = 1.5,
    filled = false,
    ...props
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={filled ? 'currentColor' : fill}
            viewBox="0 0 24 24"
            strokeWidth={filled ? 0 : strokeWidth}
            stroke={filled ? 'none' : stroke}
            className={className}
            {...props}
        >
            {filled ? (
                <>
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </>
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            )}
        </svg>
    );
};

export const TaskSVG: React.FC<SVGProps> = ({
    className = 'size-5',
    fill = 'none',
    stroke = 'currentColor',
    strokeWidth = 1.5,
    filled = false,
    ...props
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={filled ? 'currentColor' : fill}
            viewBox="0 0 24 24"
            strokeWidth={filled ? 0 : strokeWidth}
            stroke={filled ? 'none' : stroke}
            className={className}
            {...props}
        >
            {filled ? (
                <>
                    <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z" clipRule="evenodd" />
                </>
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
            )}
        </svg>
    );
};

export const StoreSVG: React.FC<SVGProps> = ({
    className = 'size-5',
    fill = 'none',
    stroke = 'currentColor',
    strokeWidth = 1.5,
    filled = false,
    ...props
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={filled ? 'currentColor' : fill}
            viewBox="0 0 24 24"
            strokeWidth={filled ? 0 : strokeWidth}
            stroke={filled ? 'none' : stroke}
            className={className}
            {...props}
        >
            {filled ? (
                <>
                    <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                    <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" />
                    <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
                </>
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            )}
        </svg>
    );
};

export const WalletSVG: React.FC<SVGProps> = ({
    className = 'size-5',
    fill = 'none',
    stroke = 'currentColor',
    strokeWidth = 1.5,
    filled = false,
    ...props
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={filled ? 'currentColor' : fill}
            viewBox="0 0 24 24"
            strokeWidth={filled ? 0 : strokeWidth}
            stroke={filled ? 'none' : stroke}
            className={className}
            {...props}
        >
            {filled ? (
                <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
            )}
        </svg>
    );
};
export const ProfileSVG: React.FC<SVGProps> = ({
    className = 'size-5',
    fill = 'none',
    stroke = 'currentColor',
    strokeWidth = 1.5,
    filled = false,
    ...props
}) => {
   
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fill}
            viewBox="0 0 24 24"
         
            
            className={className}
            {...props}
        >
            {filled ? (<path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM11.9915 6.25C10.1957 6.25 8.73799 7.70407 8.73799 9.5C8.73799 11.2959 10.1957 12.75 11.9915 12.75C13.7874 12.75 15.2451 11.2959 15.2451 9.5C15.2451 7.70407 13.7874 6.25 11.9915 6.25ZM17.0515 16.4917C14.3841 13.5975 9.57056 13.7453 6.95756 16.4821C6.75026 16.6992 6.6924 17.019 6.81048 17.295C6.92855 17.571 7.19983 17.75 7.50002 17.75H16.5C16.7978 17.75 17.0674 17.5738 17.1869 17.3011C17.3065 17.0283 17.2533 16.7107 17.0515 16.4917Z" fill="#000000"></path>
               ) : (
                    <>  <circle cx="12" cy="12" r="10" stroke={stroke}  strokeWidth={strokeWidth}  strokeLinecap="round" strokeLinejoin="round"></circle>
                    <path d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
           </>
            )}

           
        </svg>
    );
};

export const YoutubeSVG: React.FC<SVGProps> = ({
    className = 'size-5',
    fill = 'none',
    stroke = 'currentColor',
    strokeWidth = 1.5,
    
    ...props
}) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
           className={className}
            viewBox="0 0 256 256"
            xmlSpace="preserve"
            {...props}
        >
            <defs></defs>
            <g
                style={{
                    stroke: "none",
                    strokeWidth: 0,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "none",
                    fillRule: "nonzero",
                    opacity: 1
                }}
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
                <rect
                    x="25.98"
                    y="25.27"
                    rx={0}
                    ry={0}
                    width="38.95"
                    height="37.62"
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(255,255,255)",
                        fillRule: "nonzero",
                        opacity: 1
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                />
                <path
                    d="M 88.119 23.338 c -1.035 -3.872 -4.085 -6.922 -7.957 -7.957 C 73.144 13.5 45 13.5 45 13.5 s -28.144 0 -35.162 1.881 c -3.872 1.035 -6.922 4.085 -7.957 7.957 C 0 30.356 0 45 0 45 s 0 14.644 1.881 21.662 c 1.035 3.872 4.085 6.922 7.957 7.957 C 16.856 76.5 45 76.5 45 76.5 s 28.144 0 35.162 -1.881 c 3.872 -1.035 6.922 -4.085 7.957 -7.957 C 90 59.644 90 45 90 45 S 90 30.356 88.119 23.338 z M 36 58.5 v -27 L 59.382 45 L 36 58.5 z"
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(246,28,13)",
                        fillRule: "nonzero",
                        opacity: 1
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                />
            </g>
        </svg>

    );
};

