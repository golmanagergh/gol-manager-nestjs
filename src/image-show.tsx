import React from 'react';

interface PictureI {
  record: any; // 'any' can be replaced with the actual type of the 'record' property
  resource: any;
}

const RandomPicture: React.FC<PictureI> = (props) => {
  // Picsum generates a random 200x200 photo
  let returnable;
  const params = props.record.params;
  if (params.image) {
    const path = `/uploads/${props.resource.id}/${params.id}/${params.image}`;

    returnable = (
      <img
        style={{ height: '100px', width: '100px', objectFit: 'contain' }}
        src={path}
      />
    );
  } else {
    returnable = <></>;
  }

  return returnable;
};

export default RandomPicture;
