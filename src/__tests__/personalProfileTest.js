import React from 'react';
import PersonalProfilePage from '../Pages/PersonalProfile';
import ImageGrid from '../Components/Grids/ImageGrid';
import { act, render, screen,fireEvent} from "../TestUtilities/test-utils";
import { getByText } from '@testing-library/react';
import {database} from '../Firebase/firebase';
import '@testing-library/jest-dom';


beforeEach(async () => {
  window.alert = jest.fn();
  const setSelectedImg = jest.fn();
  await database.enableNetwork();
  await act(async () => {
    render(<ImageGrid setSelectedImg ={setSelectedImg} profile ={"12345"}/>);
    render(<PersonalProfilePage/>);
  });
});

describe('Stratus Logo', () => {
  test('Logo must have src = "/images/logo4.png" and alt = "stratusLogo"', () => {
    const stratusLogo = screen.getByAltText('stratusLogoHeaderProfile');
    expect(stratusLogo).toHaveAttribute('src', '/images/logo4.png');
    expect(stratusLogo).toHaveAttribute('alt', 'stratusLogoHeaderProfile');
  });
});

describe("Header Home Icon Clicked",() =>{

  test('Home Button Works',() =>{
    const homeIcon = screen.getByRole('button',{name: /homeButtonHeaderProfile/i});
    expect(homeIcon).toBeInTheDocument();
    fireEvent.click(homeIcon);
  });
});


describe("Menu Click", () => {

  //afterEach(cleanup);
  test("renders menu button(Account Circle), then we try to click it",  () => {
    const button = screen.getByRole('button',{name: "accountCircle"});
    fireEvent.click(button);
    const menuItem = screen.getByRole("menu");
    expect(getByText(menuItem, "My Profile")).toBeTruthy();
    expect(getByText(menuItem, "Logout")).toBeTruthy();
  });
});

afterEach(async () =>{
  await database.disableNetwork();
  jest.clearAllMocks();
})

