import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import axios from 'axios';

import './Add2.css';
import './loader.css';
import { Link } from 'react-router-dom';

export default function Add2() {
  const [listingData, setListingData] = useState('');
  const [ansApi, setAnsApi] = useState('');
  const [isLoader, setIsLoader] = useState(false);

  let data64; // init variable

  // console.log(listingData)

  /* Put this Conditional for starting web app o refreshing
   * to avoid errors because initial value is ""
   * initial value:
   * listingData = "" and listingData.selectedFile = undefined
  */

  if (listingData !== '') {
    data64 = listingData.selectedFile.split(',');
    // console.log(data64); //data64 = image converted to base64
  }

  // Input File
  // Convert image to base 64
  // set ansApi to false
  const handleListing = ({ base64 }) => {
    setListingData({ ...listingData, selectedFile: base64 });

    setAnsApi('');
  };

  // Send image to ImgBB with AXIOS
  const handleClick = () => {
    // show loader hiden window
    setIsLoader(!isLoader);

    const data = new FormData();
    data.append('image', data64[1]);
    // data.append('name', 'prueba01')

    // imgbb's personal Token
    // https://es.imgbb.com/
    const imgbbToken = '165bc83a2b0f87e5ddc8af943b7fcba4';
    const APIurl = 'https://api.imgbb.com/1/upload?key=';

    const config = {
      method: 'post',
      url: APIurl + imgbbToken,
      headers: { 'Content-Type': 'multipart/form-data' },
      data,
    };

    axios(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        console.log(response);
        console.log(response.data.data.image.url);
        setAnsApi(response.data.data.image.url);
        setIsLoader(isLoader);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="add2Container">
      <h2>Add Doctor - Step 2/3</h2>

      <div id="loader" className={isLoader ? '' : 'hidden'} />

      <div className={`animate-bottom ${isLoader ? 'hidden' : ''}`}>

        {/* Input file to select an image.
      The selected image will save on imgbb web storage
      imgbb creates an url for every image that you upload
      the main porpuse is fill all url_image field on database's API
      */}
        {!ansApi && (
          <div>
            <h3>Select doctor&lsquo;s image</h3>
            <FileBase type="file" multiple={false} onDone={({ base64 }) => handleListing({ base64 })} />
          </div>
        )}

        {
          listingData && (
            <div>
              <h3>Image Preview</h3>
              <img className={`img ${listingData ? '' : 'hidden'}`} src={data64} alt="" />
            </div>
          )
        }

        {
          !ansApi && listingData && (
            <div>
              <h4>Click the button to CONFIRM</h4>
              <button disabled={!(listingData && !ansApi)} className="btn" type="button" onClick={() => handleClick()}>CONFIRM</button>
            </div>
          )
        }

        <div className={ansApi ? '' : 'hidden'}>
          <h2>Image Attached!!</h2>
          <h3>
            URL_image:
            {' '}
            <a href={ansApi} target="_blank" rel="noopener noreferrer">{ansApi}</a>
          </h3>
          <Link to="/add3"><button type="button" className="add2Button">Next</button></Link>
        </div>

      </div>

    </div>
  );
}
