import React from 'react';

import './Hero.scss';

interface HeroProps {
  bgImgUrl: string;
  children?: any;
};

// export const Hero: React.SFC<HeroProps> = ({ bgImgUrl, children }) => {

//   return (
//     <div
//       className="hero"
//       style={{
//         backgroundImage: `url(${bgImgUrl}) no-repeat center center fixed`,
//         backgroundSize: 'cover',
//       }}
//     >
//       { children }
//     </div>
//   );

// };

export class Hero extends React.Component<HeroProps,{}> {

  constructor(props) {
    super(props);
  }

  getStyles = () => (
    {
      background: `url(${this.props.bgImgUrl}) no-repeat center center`,
      backgroundSize: 'cover',
    }
  );

  render() {
    const { children } = this.props;
    return this.props.bgImgUrl && (
      <div
        className="hero hero__text--white"
        style={this.getStyles()}
      >
        { children }
      </div>
    )
  }


}