import icons from '../../img/icons.svg'; //Parcel 2
import View from './View.js';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  errorMessage = 'No recipes found for your query! Please try again ;)';
  message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
