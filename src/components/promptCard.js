import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsPencilFill, BsShareFill } from 'react-icons/bs';
import { FaCopy } from 'react-icons/fa';

const PromptCard = ({ prompt }) => {
    return (
        <div className="border rounded-lg p-7 text-black grid gap-8">
            <div className="flex place-items-center gap-3 font-raleway">
                <img
                    src=""
                    alt="user avatar"
                    className="w-8 h-8 border rounded-full"
                />
                <span>
                    <h4 className="text-lg font-bold">Prompt Title</h4>
                    <h5 className="text-sm">Author Name</h5>
                </span>
            </div>
            <p className="font-lato text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                cum praesentium eos, voluptatem similique!
            </p>
            <div className="flex justify-between">
                <span className="flex gap-2">
                    <button className="text-orange">
                        <AiOutlineHeart size={23} />
                        <AiFillHeart size={23} />
                    </button>
                    <span className="font-lato font-bold text-sm">
                        100 Likes
                    </span>
                </span>
                <span className="flex gap-3">
                    <button>
                        <BsShareFill size={22} />
                    </button>
                    <button>
                        <BsPencilFill size={22} />
                    </button>
                    <button>
                        <FaCopy size={22} />
                    </button>
                </span>
            </div>
        </div>
    );
};

export default PromptCard;
