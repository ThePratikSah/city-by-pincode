# India Pincode Directory

This package uses pincode data from [data.gov.in](https://www.data.gov.in/catalog/all-india-pincode-directory)

## Example

```js
const getCityDataByPinCode = require('city-by-pincode');

console.log(getCityDataByPinCode['854326'])
```
## You can also use the function for getting the data of any pincode

```js
const {getCityDataByPinCode} = require('city-by-pincode');

console.log(getCityDataByPinCode('854301'));
```

```bash
# Exmaple output
{
  Pincode: '854301',
  'Circle Name': 'Bihar Circle',
  'Region Name': 'Muzaffarpur Region',
  'Division Name': 'Purnea Division',
  'Office Name': 'Purnea HO',
  OfficeType: 'HO',
  District: 'Purnia',
  StateName: 'Bihar'
}
```
