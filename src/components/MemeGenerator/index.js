import {Component} from 'react'

import {
  BgContainer,
  FormContainer,
  Heading,
  Label,
  Input,
  Button,
  BgImage,
  Paragrph,
  Select,
  HeadingOne,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imgUrlNormal: '',
    imgUrlMain: '',
    topTextNormal: '',
    topTextMain: '',
    bottomTextNormal: '',
    bottomTextMain: '',
    selectValueNormal: fontSizesOptionsList[0].displayText,
    selectValueMain: '',
  }

  changeImgeUrl = event => {
    this.setState({imgUrlNormal: event.target.value})
  }

  changeTopText = event => {
    this.setState({topTextNormal: event.target.value})
  }

  changeBottomText = event => {
    this.setState({bottomTextNormal: event.target.value})
  }

  changeSelect = event => {
    this.setState({selectValueNormal: event.target.value})
  }

  clickButton = event => {
    event.preventDefault()

    const {
      imgUrlNormal,
      topTextNormal,
      bottomTextNormal,
      selectValueNormal,
    } = this.state
    this.setState({
      imgUrlMain: imgUrlNormal,
      topTextMain: topTextNormal,
      bottomTextMain: bottomTextNormal,
      selectValueMain: selectValueNormal,
    })
  }

  render() {
    const {
      imgUrlMain,
      topTextMain,
      bottomTextMain,
      selectValueMain,
      imgUrlNormal,
      topTextNormal,
      bottomTextNormal,
      selectValueNormal,
    } = this.state
    console.log(topTextNormal)

    return (
      <BgContainer>
        <HeadingOne>Meme Generator</HeadingOne>
        <FormContainer>
          <Heading>Meme Generator</Heading>
          <Label htmlFor="image">Image Url</Label>
          <Input
            id="image"
            placeholder="Enter the Image Url"
            type="text"
            onChange={this.changeImgeUrl}
            value={imgUrlNormal}
          />
          <Label htmlFor="topText">Top Text</Label>
          <Input
            id="topText"
            placeholder="Enter the Top Text"
            type="text"
            onChange={this.changeTopText}
            value={topTextNormal}
          />
          <Label htmlFor="bottomText">Bottom Text</Label>
          <Input
            id="bottomText"
            placeholder="Enter the Bottom Text"
            type="text"
            onChange={this.changeBottomText}
            value={bottomTextNormal}
          />
          <Label htmlFor="fontSize">Font Size</Label>
          <Select
            onChange={this.changeSelect}
            value={selectValueNormal}
            id="fontSize"
          >
            {fontSizesOptionsList.map(echValue => (
              <option value={echValue.displayText} key={echValue.optionId}>
                {echValue.displayText}
              </option>
            ))}
          </Select>
          <Button onClick={this.clickButton}>Generate</Button>
        </FormContainer>

        <BgImage bgImage={imgUrlMain} data-testid="meme">
          <Paragrph selectValue={selectValueMain}>{topTextMain}</Paragrph>
          <Paragrph selectValue={selectValueMain}>{bottomTextMain}</Paragrph>
        </BgImage>
      </BgContainer>
    )
  }
}

export default MemeGenerator
