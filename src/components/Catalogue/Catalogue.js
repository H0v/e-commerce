import React from "react";
import "./catalogue.css";
import LivingRoom from "../../static/images/livingRoom.jfif";
import BedRoom from "../../static/images/bedRoom.jfif";
import Kitchen from "../../static/images/kitchen.jfif";
import BathRoom from "../../static/images/bathroom.jfif";
import LongArrow from "../../static/svg/longArrow.svg";

export default function Catalogue() {
  return (
    <div className="catalogue">
      <div className="description">
        <p className="descriptionTitle fctm">High Quality Home Decor</p>
        <p className="descriptionText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue eu
          sagittis feugiat nunc sit est vitae eget. Nisl at sed ultrices
          pharetra massa consectetur lobortis velit fames. Iaculis arcu rhoncus
          tellus porta ornare nunc libero. Accumsan nisi, ullamcorper non
          venenatis egestas convallis sed dignissim massa.
        </p>
      </div>
      <div className="categories">
        <div className="column">
          <div className="catItem">
            <div className="bigImage">
              <img alt="livingRoom" src={LivingRoom}></img>
            </div>
            <div className="catControls">
              <p className="fctm">Living Room</p>
              <img className="catArrow" alt="arrow" src={LongArrow}></img>
            </div>
          </div>
          <div className="catItem">
            <div className="smallImage">
              <img alt="bedRoom" src={BedRoom}></img>
            </div>
            <div className="catControls">
              <p className="fctm">Bedroom</p>
              <img className="catArrow" alt="arrow" src={LongArrow}></img>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="catItem">
            <div className="smallImage">
              <img alt="kitchen" src={Kitchen}></img>
            </div>
            <div className="catControls">
              <p className="fctm">Kitchen</p>
              <img className="catArrow" alt="arrow" src={LongArrow}></img>
            </div>
          </div>
          <div className="catItem">
            <div className="bigImage">
              <img alt="bathroom" src={BathRoom}></img>
            </div>
            <div className="catControls">
              <p className="fctm">Bathroom</p>
              <img className="catArrow" alt="arrow" src={LongArrow}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
