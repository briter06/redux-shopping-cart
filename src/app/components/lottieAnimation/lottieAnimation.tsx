import React from 'react';
import './lottieAnimation.css';
import greenCheckAnimation from '../../../assets/lottieAnimations/greenCheck.json'
import { useLottie } from 'lottie-react';

export enum LottieAnimationsIds {
  GREEN_CHECK = 'GREEN_CHECK'
}

const animations = {
  GREEN_CHECK: greenCheckAnimation
}

function LottieAnimation(props: {animationId: LottieAnimationsIds, loop: boolean, viewStyle?: React.CSSProperties, lastFrame?: number}){
  const lottie = useLottie({
    animationData: animations[props.animationId],
    loop: props.loop,

  })
  lottie.animationItem?.addEventListener("enterFrame", function (animation) {
    if(lottie.animationItem && props.lastFrame){
      if (animation.currentTime > (props.lastFrame < 0 ? (lottie.animationItem.totalFrames - props.lastFrame) : props.lastFrame)) {
        lottie.animationItem.pause();
      }
    }  
  });
  return (
    <div style={props.viewStyle}>
      {lottie.View}
    </div>
  )
}

export default LottieAnimation;
