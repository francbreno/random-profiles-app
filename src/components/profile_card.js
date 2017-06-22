import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

export default (props) => {
  return (
    <Card style={{width: '256px', margin: '8px'}}>
      <CardTitle
        avatar={ props.profile.picture.thumbnail }
        title={ props.profile.name.first }
        subtitle={ props.profile.email }
      />
      <CardMedia
        aspectRatio="square"
        image={ props.profile.picture.large }
      />
      <CardActions>
        { props.children }
      </CardActions>
    </Card>
  );
}
