import { createElement } from 'rax';
import { isWeb, isKraken, isWeex, isMiniApp, isWeChatMiniProgram } from 'universal-env';

import Container from '../../../components/Container';
import Section from '../../../components/Section';
import SectionTextItem from '../../../components/SectionTextItem';

export default function App() {
  return (
    <Container
      title={'System/Env'}
      moduleTitle={'Env'}
      desc={'Judge and obtain the runtime environment.'}
    >
      <Section title={'Is Web : '}>
        <SectionTextItem>{String(isWeb)}</SectionTextItem>
      </Section>

      <Section title={'Is Kraken : '}>
        <SectionTextItem>{String(isKraken)}</SectionTextItem>
      </Section>

      <Section title={'Is Weex : '}>
        <SectionTextItem>{String(isWeex)}</SectionTextItem>
      </Section>

      <Section title={'Is Ali Mini App : '}>
        <SectionTextItem>{String(isMiniApp)}</SectionTextItem>
      </Section>

      <Section title={'Is WeChat Mini Program : '}>
        <SectionTextItem>{String(isWeChatMiniProgram)}</SectionTextItem>
      </Section>
    </Container>
  );
}
