import styled from 'styled-components';

export const StyledServicesWrap = styled.section`
  width: 100%;
  padding: 100px 0 50px;
  @media screen and (max-width: 768px) {
    padding: 60px 0 20px;
  }
  .topbar{
    display: flex;
    padding-bottom: 110px;
    @media screen and (max-width: 1199px) {
      padding-bottom: 60px;
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .title{
        font-size: 45px;
        line-height: 45px;
        @media screen and (max-width: 1199px) {
          font-size: 36px;
        }
        @media screen and (max-width: 768px) {
          br{
            display: none;
          }
        }
    }
    .content{
        font-size: 20px;
        line-height: 24px;
        max-width: 580px;
        margin-left: auto;
        @media screen and (max-width: 1199px) {
          font-size: 18px;
        }
        @media screen and (max-width: 768px) {
          max-width: 100%;
        }
    }
  }
  .button-wrap{
    text-align: center;
    .btn-transparent{
      max-width: 132px;
      padding-left: 20px;
    }
  }
  .btn-transparent{
    background-color: transparent;
    border: 1px solid var(--black);
    .icon{
      margin-left: 8px;
      position: relative;
      top: 2px;
    }
  }
`
export const ServicesListed = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-left: -7.5px;
    margin-right: -7.5px;
    @media screen and (max-width: 1199px) {
      margin-left: -15px;
      margin-right: -15px;
    }
    .service-list{
        flex-basis: 33.33%;
        max-width: 33.33%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 7.5px;
        padding-right: 7.5px;
        min-height: 410px;
        margin-bottom: 30px;
        @media screen and (max-width: 991px) {
            flex-basis: 50%;
            max-width: 50%;
            @media screen and (max-width: 575px) {
              flex-basis: 100%;
              max-width: 100%;
          }
        }
        @media screen and (min-width: 992px) {
            flex-basis: 33.33%;
            max-width: 33.33%;
        }
        @media screen and (max-width: 1199px) {
          padding-left: 15px;
          padding-right: 15px;
        }
    }
    .card {
    width: 100%;
    background: var(--white);
    padding: 30px;
    border-radius: 23px;
    width: 363px;
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.13);
    @media screen and (max-width: 1199px) {
      width: 100%;
    }
    .thumb {
      max-width: 298px;
      margin: -75px auto 10px auto;
      border-radius: 20px;
      overflow: hidden;
      img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
    .title {
      color: var(--black);
      font-size: 22px;
      line-height: 26px;
      font-weight: 500;
      @media screen and (min-width: 768px) {
        font-size: 26px;
        line-height: 30px;
      }
    }
    .discreption {
      display: block;
      color: #777;
      font-size: 14px;
      line-height: 18px;
      font-weight: 300;
      @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
`