import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
import Choose from './Choose'


describe('That my main page after login has all the correct links and phrasing', () => {

    // test('Test that the choose page contains a link to compose post', () => {
    
    //   render(<Router><Choose /></Router>);
    
    //   const element = screen.getByText(/Compose/i)
    
    //   expect(element).toBeInTheDocument()
    // });

    // test('Test that the choose page contains a link to the posts', () => {
    
    //     render(<Router><Choose /></Router>);
      
    //     const element = screen.getByText(/See my Blogs/i)
      
    //     expect(element).toBeInTheDocument()
    //   });

    // test('Test that the choose page contains a link to the typing game', () => {
    
    //     render(<Router><Choose /></Router>);
      
    //     const element = screen.getByText(/Test My Typing/i)
      
    //     expect(element).toBeInTheDocument()
    //   });
})