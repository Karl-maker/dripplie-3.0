/**
 *
 * @author Karl-Johan Bailey
 * @created 06/12/2022
 * @desc Managing the flow of asking for geolocation permission
 * @param { Function } onGranted callback that gets result
 * @param { Function } onError callback that gets result
 * @param { Function } onDenied callback that gets result
 * @see https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs
 *
 */

function handleGeoLocationPermission({
  onGranted = () => {},
  onError = () => {},
  onDenied = () => {},
}) {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        onGranted(position);
      },
      function (error) {
        onError(error);
      }
    );
  } else {
    onDenied();
  }
}

export default handleGeoLocationPermission;
