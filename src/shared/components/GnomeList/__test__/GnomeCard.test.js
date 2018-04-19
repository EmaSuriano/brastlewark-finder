import React from 'react';
import { shallow } from 'enzyme';
import theme from 'shared/constants/theme';
import GnomeCard, {
  StyledLink,
  GnomeProfessions,
  GnomeName,
  CardGrid,
  GnomePicture,
} from '../GnomeCard';

describe('<GnomeCard />', () => {
  describe('render', () => {
    let gnomeCard;

    beforeEach(() => {
      gnomeCard = shallow(
        <GnomeCard
          id="1"
          name="James"
          thumbnail="bestPictureEver.jpg"
          professions={['chef', 'driver']}
        />,
      );
    });

    it('should render StyledLink with id', () => {
      const styledLink = gnomeCard.find('StyledLink');

      expect(styledLink.exists()).toBe(true);
      expect(styledLink.prop('to')).toBe('/gnome/1');
    });

    it('should render CardGrid with picture, name and professions', () => {
      const cardGrid = gnomeCard.find('CardGrid');

      expect(cardGrid.exists()).toBe(true);
      expect(cardGrid.find('GnomePicture').exists()).toBe(true);
      expect(cardGrid.find('GnomeName').exists()).toBe(true);
      expect(cardGrid.find('GnomeProfessions').exists()).toBe(true);
    });

    it('should render GnomePicture', () => {
      const gnomePicture = gnomeCard.find('GnomePicture');

      expect(gnomePicture.exists()).toBe(true);
      expect(gnomePicture.prop('size')).toBe(70);
      expect(gnomePicture.prop('src')).toBe('bestPictureEver.jpg');
    });

    describe('GnomeProfessions with Professions Tag', () => {
      it('should render the same amount if professions are less than MAX_PROFESSIONS', () => {
        const gnomeProfessions = gnomeCard.find('GnomeProfessions');

        expect(gnomeProfessions.exists()).toBe(true);
        expect(gnomeProfessions.find('ProfessionTag').length).toBe(2);
      });

      it('should render the upn to MAX_PROFESSIONS amount if professions are greater than MAX_PROFESSIONS', () => {
        gnomeCard.setProps({
          professions: ['chef', 'driver', 'runner', 'painter', 'skater'],
        });

        const gnomeProfessions = gnomeCard.find('GnomeProfessions');

        expect(gnomeProfessions.exists()).toBe(true);
        expect(gnomeProfessions.find('ProfessionTag').length).toBe(4);
      });
    });
  });
});

describe('<StyledLink />', () => {
  it('render', () => {
    expect(shallow(<StyledLink to="/" />)).toMatchSnapshot();
  });
});

describe('<GnomeProfessions />', () => {
  it('render', () => {
    expect(shallow(<GnomeProfessions />)).toMatchSnapshot();
  });
});

describe('<GnomeName />', () => {
  it('render', () => {
    expect(shallow(<GnomeName />)).toMatchSnapshot();
  });
});

describe('<GnomePicture />', () => {
  it('render', () => {
    expect(shallow(<GnomePicture size={1} />)).toMatchSnapshot();
  });
});

describe('<CardGrid />', () => {
  it('render', () => {
    expect(shallow(<CardGrid theme={theme} />)).toMatchSnapshot();
  });
});
