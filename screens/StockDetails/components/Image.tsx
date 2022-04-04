import { Center, Image as NBImage } from "native-base";
import React from "react";
import { SvgUri } from "react-native-svg";
import { addTokenToURI } from "../../../API";

function Image({ uri }) {
  if (uri) {
    const uriWithToken = addTokenToURI(uri);
    if (uri.includes(".svg")) {
      return (
        <Center>
          <SvgUri width={100} height={100} uri={uriWithToken} />
        </Center>
      );
    }
    return (
      <Center>
        <NBImage
          source={{ uri: uriWithToken }}
          resizeMode="contain"
          size="xl"
          alt="Company Logo"
        />
      </Center>
    );
  }
  return null;
}


export default React.memo(Image);
