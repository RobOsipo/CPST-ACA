import { render, screen, within } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
import Choose from './Choose'


describe('That my main page after login has all the correct links and phrasing', () => {

    test('Test that the choose page contains a link to compose post', () => {
        const root = document.createElement('div')
    
      render(<Router><Choose root={root} /></Router>);

    
      const { getByText } = within(root)
    
      expect(root).toContainElement(getByText(/Compose/i))
    
    });

    // test('Test that the choose page contains a link to the posts', () => {
    
    //     render(<Router><Choose /></Router>);
      
    //     const element = screen.getByText(/See my Posts/i)
      
    //     expect(element).toBeInTheDocument()
    //   });

    // test('Test that the choose page contains a link to the typing game', () => {
    
    //     render(<Router><Choose /></Router>);
      
    //     const element = screen.getByText(/Test My Typing/i)
      
    //     expect(element).toBeInTheDocument()
    //   });
})