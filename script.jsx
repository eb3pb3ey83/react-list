class ImagePreview extends React.Component {
  constructor() {
    super();
    this.state = {
      img: '',
      file: null,
    }
    this.onFileSelected = this.onFileSelected.bind(this);
    this.onImageLoad = this.onImageLoad.bind(this);
  }

  onFileSelected (e) {
    const file = e.target.files.item(0);

    const reader = new FileReader();
    reader.addEventListener('load', this.onImageLoad);
    reader.readAsDataURL(file);

    this.setState({ file });
  }

  onImageLoad (e) {
    this.setState({ img: e.target.result });
  }

  render() {
    return (
      <div>
        <input accept="image/*" type="file" onChange={this.onFileSelected} />
        <br />
        <img src={this.state.img} width="300" alt="preview" />
      </div>
    );
  }
}

ReactDOM.render(<ImagePreview />, document.querySelector("#content"));
