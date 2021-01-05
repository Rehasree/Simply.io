import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./View/Tiltle";
import Subheading from "./View/Subheading";
import OverviewCard1 from "./View/OverviewCard1";
import Overviewcard2 from "./View/OverviewCard2";
import Calculator from "./View/Calculator";
export default function View() {
  return (
    <div>
      <div className='container'>
        <div>
          <Title />
        </div>
        <br />
        <div>
          <div class="row">
            <div class="col-lg-9 col-sm-12 order-lg-1 order-sm-2">
              <div>
                <Subheading name="Overview" />
              </div>
              <OverviewCard1 />
            </div>
            <div className="col-lg-3 col-sm-12 order-lg-2 order-sm-1">
              <div>
                <Subheading name="Riskmeter" />
              </div>
              <Overviewcard2 />
            </div>
          </div>
          <div class="col">
            <div>
              <Subheading name="Calculator" />
            </div>
            <div>
              <Calculator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
