//Complete the Custom Image component based on the props that it expects to receive

export const Image = ({src, alt, borderRadius, width, height, fit}) => {
  return <img alt={alt} src={src} style={{borderRadius:borderRadius, width:width, height:height}} />;
};
