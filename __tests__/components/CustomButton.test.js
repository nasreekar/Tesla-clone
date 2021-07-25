import React from "react";
import { render } from "@testing-library/react-native";
import CustomButton from '../../components/CustomButton';
import { buttonEnum } from "../../utils/buttonEnum";

beforeEach(() => {
  jest.useFakeTimers();
});

describe("<CustomButton />", () => {

  it("renders correctly", () => {
    const wrapper = render(<CustomButton type = {buttonEnum.Primary} title={"order now"} onPress ={()=>({})} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders primary button correctly",() => {
    const wrapper = render(<CustomButton type = {buttonEnum.Primary} title={"order now"} onPress ={()=>({})} />);
    const textComponent = wrapper.getByTestId('customButtonTitle');
    expect(textComponent.props.children).toEqual('order now');
  })

  it("renders secondary button correctly",() => {
    const wrapper = render(<CustomButton type = {buttonEnum.Secondary} title={"learn more"} onPress ={()=>({})} />);
    const textComponent = wrapper.getByTestId('customButtonTitle');
    expect(textComponent.props.children).toEqual('learn more');
  })

  it('primary button should be wrapper in black color', () => {
    const wrapper = render(<CustomButton type = {buttonEnum.Primary} title={"order now"} onPress ={()=>({})} />);
    const childStyles = wrapper.toJSON().children[0].props.style;
    const { backgroundColor } = childStyles;
    expect(backgroundColor).toEqual('#171A20CC');
  });

  it('secondary button should be wrapper in black color', () => {
    const wrapper = render(<CustomButton type = {buttonEnum.Secondary} title={"learn more"} onPress ={()=>({})} />);
    const childStyles = wrapper.toJSON().children[0].props.style;
    const { backgroundColor } = childStyles;
    expect(backgroundColor).toEqual('#FFFFFFA6');
  });
});
