



// This sample uses the Places Autocomplete widget to:
// 1. Help the user select a place
// 2. Retrieve the address components associated with that place
// 3. Populate the form fields with those address components.
// This sample requires the Places library, Maps JavaScript API.
// Include the libraries=places parameter when you first load the API.

let autocomplete2;
let address1Field2;








function initAutocomplete2() {
  address1Field2 = document.querySelector("#ship-address2");


  // Create the autocomplete object, restricting the search predictions to
  // addresses in the US and Canada.
  autocomplete2 = new google.maps.places.Autocomplete(address1Field2, {
    componentRestrictions: { country: ["jm"] },
    fields: ["address_components", "geometry"],
    types: ["address"],
  });
  address1Field2.focus();
  // When the user selects an address from the drop-down, populate the
  // address fields in the form.
  autocomplete2.addListener("place_changed", fillInAddress2);
}

function fillInAddress2() {

    
  // Get the place details from the autocomplete object.
  const place = autocomplete2.getPlace();
  let address1 = "";
  let postcode = "";

  // Get each component of the address from the place details,
  // and then fill-in the corresponding field on the form.
  // place.address_components are google.maps.GeocoderAddressComponent objects
  // which are documented at http://goo.gle/3l5i5Mr
  for (const component of place.address_components) {
    const componentType = component.types[0];

    switch (componentType) {
      case "street_number": {
        address1 = `${component.long_name} ${address1}`;
        break;
      }

      case "route": {
        address1 += component.short_name;
        break;
      }

      case "postal_code": {
        postcode = `${component.long_name}${postcode}`;
        break;
      }

      case "postal_code_suffix": {
        postcode = `${postcode}-${component.long_name}`;
        break;
      }
      case "locality":
        document.querySelector("#locality2").value = component.long_name;
        break;

      case "administrative_area_level_1": {
        document.querySelector("#state2").value = component.short_name;
        break;
      }
      case "country":
        document.querySelector("#country").value = component.long_name;
        break;
    }
  }
  address1Field2.value = address1;
  postalField2.value = postcode;
  // After filling the form with address components from the Autocomplete
  // prediction, set cursor focus on the second address line to encourage
  // entry of subpremise information such as apartment, unit, or floor number.


}


