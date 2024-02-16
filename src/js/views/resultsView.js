import View from './View.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
class ResltsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'no recipes found for your query! try again';
  _message = '';
  _generateMarkup() {
    return this._data
      .map(bookmarks => previewView.render(bookmarks, false))
      .join('');
  }
}
export default new ResltsView();
