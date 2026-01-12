import normalPhoto from "../../assets/photo-normal.jpg";
import cyberPhoto from "../../assets/photo-cyber.jpg";
import Reveal from "../common/Reveal";

export default function ProfileImage() {

    return (
        <Reveal>
            <div className="flex-shrink-0 flex justify-center">
                <div className="relative group">
                    <div className="absolute -inset-1 rounded-full"></div>
                    <div className="relative coin-flip">
                        <img
                            src={normalPhoto}
                            alt="Gabriel - Photo"
                            className="front rounded-full object-cover border-4 border-gray-900"
                        />
                        <img
                            src={cyberPhoto}
                            alt="Gabriel - Pixel Art"
                            className="back rounded-full object-cover border-4 border-gray-900"
                        />
                    </div>
                </div>
            </div>
        </Reveal>
    );
}
