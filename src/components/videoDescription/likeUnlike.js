import like from "../../assets/like.svg";
import unlike from "../../assets/unlike.svg";

export default function LikeUnlike({likes , unlikes}){
    return(
        <div class="flex gap-10 w-48">
          <div class="flex gap-1">
            <div class="shrink-0">
              <img class="w-5 block" src={like} alt="Like" />
            </div>
            <div class="text-sm leading-[1.7142857] text-slate-600">{likes}k</div>
          </div>
          <div class="flex gap-1">
            <div class="shrink-0">
              <img class="w-5 block" src={unlike} alt="Unlike" />
            </div>
            <div class="text-sm leading-[1.7142857] text-slate-600">{unlikes}</div>
          </div>
        </div>
    );
};