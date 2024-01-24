import { useState } from "react";
import LikeIcon from "../Excursion-time/LikeIcon";
import Heading from "../common/Heading";
import "./style.scss"
import likeimg from '../../assets/heart 2.png'
import heart from '../../assets/heartactive.png'
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

function Book() {
    const [isHeartActive, setIsHeartActive] = useState(false);

    function toggleHeart() {
        setIsHeartActive((prev) => !prev)
    }
    const notifysucces = (text) => toast.success(text, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
    });
    return (
        <div className="book-wrapper">
            <ToastContainer />
            <div className="left">

            </div>
            <div className="right">
                <Heading size={2}>Забронировать тур</Heading>
                <br />
                <form>
                    <div className="diviks-1">
                        <input type="text" placeholder="10 ноября 2021" /><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <g clip-path="url(#clip0_55_246)">
                                <path d="M1 4.0752C1 2.9752 1.9 2.0752 3 2.0752H17C17.5304 2.0752 18.0391 2.28591 18.4142 2.66098C18.7893 3.03605 19 3.54476 19 4.0752V18.0752C19 18.6056 18.7893 19.1143 18.4142 19.4894C18.0391 19.8645 17.5304 20.0752 17 20.0752H3C2.46957 20.0752 1.96086 19.8645 1.58579 19.4894C1.21071 19.1143 1 18.6056 1 18.0752V4.0752ZM3 6.0752V18.0752H17V6.0752H3ZM5 0.0751953H7V2.0752H5V0.0751953ZM13 0.0751953H15V2.0752H13V0.0751953ZM5 9.0752H7V11.0752H5V9.0752ZM5 13.0752H7V15.0752H5V13.0752ZM9 9.0752H11V11.0752H9V9.0752ZM9 13.0752H11V15.0752H9V13.0752ZM13 9.0752H15V11.0752H13V9.0752ZM13 13.0752H15V15.0752H13V13.0752Z" fill="#0499DD" />
                            </g>
                            <defs>
                                <clipPath id="clip0_55_246">
                                    <rect width="20" height="20" fill="white" transform="translate(0 0.0751953)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="diviks-1">
                        <input type="text" placeholder="5 взрослых" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                            <path d="M15.8123 13.4917C14.3748 13.4917 13.2248 13.875 12.3623 14.3542C13.704 15.5042 14.279 16.8459 14.3748 16.9417L14.4706 17.1334V19.2417H22.1373V17.325C22.0415 17.325 20.5081 13.4917 15.8123 13.4917Z" fill="#0499DD" />
                            <path d="M15.8122 11.575C17.6646 11.575 19.1663 10.0733 19.1663 8.22087C19.1663 6.36841 17.6646 4.8667 15.8122 4.8667C13.9597 4.8667 12.458 6.36841 12.458 8.22087C12.458 10.0733 13.9597 11.575 15.8122 11.575Z" fill="#0499DD" />
                            <path d="M3.83301 8.22087C3.83301 6.40003 5.36634 4.8667 7.18718 4.8667C9.00801 4.8667 10.5413 6.40003 10.5413 8.22087C10.5413 10.0417 9.00801 11.575 7.18718 11.575C5.36634 11.575 3.83301 10.0417 3.83301 8.22087ZM7.18718 13.4917C2.49134 13.4917 0.958008 17.325 0.958008 17.325V19.2417H13.4163V17.325C13.4163 17.325 11.883 13.4917 7.18718 13.4917Z" fill="#0499DD" />
                        </svg>
                    </div>
                    <div className="diviks-1">
                        <input type="text" placeholder="Количество детей" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                            <path d="M15.8123 13.4917C14.3748 13.4917 13.2248 13.875 12.3623 14.3542C13.704 15.5042 14.279 16.8459 14.3748 16.9417L14.4706 17.1334V19.2417H22.1373V17.325C22.0415 17.325 20.5081 13.4917 15.8123 13.4917Z" fill="#0499DD" />
                            <path d="M15.8122 11.575C17.6646 11.575 19.1663 10.0733 19.1663 8.22087C19.1663 6.36841 17.6646 4.8667 15.8122 4.8667C13.9597 4.8667 12.458 6.36841 12.458 8.22087C12.458 10.0733 13.9597 11.575 15.8122 11.575Z" fill="#0499DD" />
                            <path d="M3.83301 8.22087C3.83301 6.40003 5.36634 4.8667 7.18718 4.8667C9.00801 4.8667 10.5413 6.40003 10.5413 8.22087C10.5413 10.0417 9.00801 11.575 7.18718 11.575C5.36634 11.575 3.83301 10.0417 3.83301 8.22087ZM7.18718 13.4917C2.49134 13.4917 0.958008 17.325 0.958008 17.325V19.2417H13.4163V17.325C13.4163 17.325 11.883 13.4917 7.18718 13.4917Z" fill="#0499DD" />
                        </svg>
                    </div>
                    <br />
                    <div className="btn-and-icon">
                        <Link to={"/allexcursion"}>
                        <button className="btn-blue" onClick={() => {
                            notifysucces("Вы успешно Забронировали тур!")
                        }}>Забронировать</button>
                        </Link>

                        <div className="like-container">
                            <img 
                                className={`heart-icon ${isHeartActive ? 'active' : ''}`}
                                src={isHeartActive ? heart : likeimg}
                                alt="Heart"
                                onClick={toggleHeart}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Book;