import { Heading } from "../styled/HeadingStyles";
import {
  CenteringWrapper,
  GridWrapper,
  HorizontalWrapper,
  Wrapper,
} from "../styled/Wrappers";
import { StyledMenuParagraph } from "../styled/StyledMenuParagraph";

export const Menu = () => {
  return (
    <>
      <Wrapper>
        <Heading>Meny</Heading>
        <GridWrapper>
          <StyledMenuParagraph>
            LASAGNE AL FORNO Klassisk lasagne med köttfärssås. //Classic lasagna
            with minced meat sauce. Pris: 170:- • Avhämtning: 170:-
          </StyledMenuParagraph>
          <StyledMenuParagraph>
            PUTTANESCA Pasta med oliver, lök, vitlök, sardeller,
            cocktailtomater, kapris och persilja. //Pasta with olives, onion,
            garlic, anchovise, cocktail tomatoes, caper and parsley. Pris: 195:-
            • Avhämtning: 195:-
          </StyledMenuParagraph>
          <StyledMenuParagraph>
            PASTA FUNGHI Skogschampinjoner, grädde, lök, vitlök, salladslök,
            parmaskinka och parmesanost. //Mushroom, cream, onion, garlic, green
            onion, parma ham and parmesan cheese. Pris: 225:- • Avhämtning:
            225:-
          </StyledMenuParagraph>
          <StyledMenuParagraph>
            PASTA POLLO Kyckling, grädde, lök, vitlök, soltorkade tomater,
            grönkål och citron. Toppas med parmesanost och pinjenötter.
            //Chicken fillet, cream, onion, garlic, sun-dried tomatoes, kale and
            lemon. Topped with parmesan cheese and pine nuts. Pris: 225:- •
            Avhämtning: 225:-
          </StyledMenuParagraph>
        </GridWrapper>
      </Wrapper>
    </>
  );
};
