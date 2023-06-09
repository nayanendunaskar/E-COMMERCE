import React from 'react'
import { styled } from 'styled-components';
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
      <>
        <Wrapper>
          {/* footer section */}
  
          <footer>
            <div className="container grid grid-four-column">
              <div className="footer-about">
                <h3>Gear Store</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
              </div>

              <div className="footer-subscribe">
                <h3>Subscribe to get more updates</h3>
                <form action="#">
                  <input type="email" name="email" placeholder="YOUR E-MAIL" />
  
                  <input type="submit" value="subscribe" />
                </form>
              </div>

              <div className="footer-social">
                <h3>Follow Us</h3>
                <div className="footer-social--icons">
                  <div>
                    <FaLinkedin className="icons" />
                  </div>

                  <div>
                    <FaTwitter className="icons" />
                  </div>

                  <div>
                    <a
                      href="https://github.com/nayanendunaskar"
                      target="_blank">
                      <FaGithub className="icons" />
                    </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-contact">
                <h3>Call Us</h3>
                <h3>+91 5432109771</h3>
              </div>
            
  
            < div className="footer-bottom--section">
              <hr />
              <div className="container grid grid-two-column ">
                <p>
                  @{new Date().getFullYear()} GEARSTORE. All Rights Reserved
                </p>
                <div>
                  <p>PRIVACY POLICY</p>
                  <p>TERMS & CONDITIONS</p>
                </div>
              </div>
              </div>
          </footer>
        </Wrapper>
      </>
    );
  };

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }


  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: #000000;
      margin-bottom: 2rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2.3rem;

      div {
        padding: 1rem;
        border-radius: 50%;

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }


    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer