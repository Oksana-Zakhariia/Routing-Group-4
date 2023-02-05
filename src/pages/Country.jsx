import { Section, Container, CountryInfo, Loader } from 'components';
import { fetchCountry } from '../service/country-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';



export const Country = () => {
  const [country, setCountry] = useState('');
  const {countryId} = useParams()
  useEffect(() => {
    fetchCountry(countryId).then(data => { setCountry(data)})
  },[countryId])

  return (
    <Section>
      <Container>
        <CountryInfo country={country}/>
      </Container>
    </Section>
  );
};
