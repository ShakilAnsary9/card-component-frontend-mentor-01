import styled from "styled-components";
import img from "../../assets/img/image-equilibrium.jpg";
import {
  borderRadius,
  colors,
  fontSize,
  fontWeight
} from "../../assets/style/variable.js";

export const Card = styled.section`
  width: 100%;
  max-width: 300px;
  height: 500px;
  background-color: ${colors.darkBlueCardBG};
  padding: 20px;
  border-radius: ${borderRadius.primary};
  .card__img {
    height: 53%;
    width: 100%;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-radius: ${borderRadius.primary};
    overflow: hidden;
    &:hover {
      .card__visible {
        visibility: visible;
        opacity: 1;
        background-color: ${colors.cyanHover};
      }
    }
  }
  .card__visible {
    visibility: hidden;
    cursor: pointer;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .card__text-content {
    margin: 20px 0;
    h3 {
      font-weight: ${fontWeight.semiBold};
      color: ${colors.White};
      font-size: ${fontSize.large};
      margin-bottom: 15px;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        color: ${colors.cyan};
      }
    }
    p {
      font-size: ${fontSize.medium};
      font-weight: ${fontWeight.light};
      color: ${colors.softBlue};
    }
  }
  .card__info-box-left {
    color: ${colors.cyan};
    gap: 5px;
    font-size: ${fontSize.small};
  }
  .card__info-box-right {
    color: ${colors.softBlue};
    gap: 5px;
    font-size: ${fontSize.small};
  }
  .card__footer {
    border-top: 1px solid ${colors.darkBlueLine};
    padding: 20px 0;
    margin: 20px 0 0 0;
    .avatar {
      width: 30px;
      height: 30px;
      border: 1px solid ${colors.White};
      border-radius: 50%;
      img {
        width: 100%;
      }
    }
    p {
      padding-right: 50px;
      font-size: ${fontSize.small};
      color: ${colors.softBlue};
      span {
        color: ${colors.White};
        cursor: pointer;
        transition: 0.2s;
        &:hover {
          color: ${colors.cyan};
        }
      }
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "space-between"};
  flex-direction: ${(props) => props.direction || "row"};
  height: ${({ height }) => height};
  gap: ${(props) => props.gap || "5px"};
`;