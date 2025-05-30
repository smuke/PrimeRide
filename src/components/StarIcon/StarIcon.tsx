type StarIconProps = {
    empty?: boolean
};

function StarIcon({empty}: StarIconProps) {
    return (
        <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            style={{ marginRight: "3px" }}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.54894 0.927052C7.84829 0.00574167 9.1517 0.00573951 9.45106 0.92705L10.6329 4.56434C10.7668 4.97636 11.1507 5.25532 11.5839 5.25532H15.4084C16.3771 5.25532 16.7799 6.49494 15.9962 7.06434L12.9021 9.31231C12.5516 9.56695 12.405 10.0183 12.5389 10.4303L13.7207 14.0676C14.02 14.9889 12.9656 15.7551 12.1818 15.1857L9.08779 12.9377C8.7373 12.6831 8.2627 12.683 7.91221 12.9377L4.81815 15.1857C4.03444 15.7551 2.97996 14.9889 3.27931 14.0676L4.46114 10.4303C4.59501 10.0183 4.44835 9.56695 4.09787 9.31231L1.00381 7.06434C0.220092 6.49494 0.622867 5.25532 1.59159 5.25532H5.41606C5.84929 5.25532 6.23324 4.97636 6.36712 4.56434L7.54894 0.927052Z"
                fill={empty ? "#B7B7B7" : "url(#paint0_linear_356_2)"}
            />
            <defs>
                <linearGradient
                    id="paint0_linear_356_2"
                    x1="8.5"
                    y1="-2"
                    x2="8.5"
                    y2="19"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#59E5EA" />
                    <stop offset="1" stop-color="#4E7AF3" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default StarIcon;
