/**
 *
 * @author Karl-Johan Bailey
 * @created 18/11/2022
 * @desc To keep things modular we abstract analytic stuff so we can upgrade or change
 *
 */

export { buttonAnalytics };

/**
 *
 * @author Karl-Johan Bailey
 * @created 18/11/2022
 * @desc All button clicks will be processed here
 * @param {String} name, object {}
 *
 */

function buttonAnalytics(name, { description }) {
  // TODO Connect GoogleAnalytics
  console.log(name + ": " + description);
}
