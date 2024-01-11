import {Section, Grid} from '~/components';
import {Text} from '~/components/ui';
import {Letter, Ring, Chat} from '~/components/illustrations';
import {obfuscateEmail} from '~/lib/utils';
interface ContactProps {
  title: string;
  body: JSX.Element | string;
  icon: JSX.Element;
}

const ContactOption = ({title, body, icon}: ContactProps) => {
  return (
    <div>
      {icon}
      <div className="border-b py-xs">
        <Text size="text-xl">{title}</Text>
      </div>
      <div className="pt-xs">{body}</div>
    </div>
  );
};

export default function Policies() {
  return (
    <>
      <Section width="narrow">
        <div className="flex justify-center w-full">
          <div className="w-7/12 text-center">
            <div className="pb-sm">
              <Text size="text-3xl">Drop us a line</Text>
            </div>
            <Text size="text-xl">
              If you need help with your order, deciding on a product or just
              want to have a small chat with us about your skin care needs,
              we&apos;re here for you!
            </Text>
          </div>
        </div>
      </Section>
      <Section width="narrow">
        <Grid items={3}>
          <ContactOption
            title="Ping us via email"
            icon={<Letter />}
            body={
              <span dangerouslySetInnerHTML={{__html: obfuscateEmail()}}></span>
            }
          />
          <ContactOption
            title="Catch us on social"
            icon={<Chat />}
            body={
              <div className="grid gap-xxs">
                <a
                  href="https://m.me/dropbydropskincare"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook Messenger
                </a>
                <a
                  href="https://www.instagram.com/dropbydropskincare"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>

                <a
                  href="https://wa.me/004560617219"
                  target="_blank"
                  rel="noreferrer"
                >
                  Whatsapp
                </a>
                <a
                  href="viber://chat/?number=%2B004560617219"
                  target="_blank"
                  rel="noreferrer"
                >
                  Viber
                </a>
              </div>
            }
          />
          <ContactOption
            title="Feel free to call"
            icon={<Ring />}
            body={
              <div className="grid gap-xxs">
                <Text>+45 71 72 55 70</Text>
                <Text>Weekdays: 10-16 CET time</Text>
              </div>
            }
          />
        </Grid>
      </Section>
      <Section>
        <div className="flex justify-center w-full">
          <div className="w-7/12 text-center">
            <div className="pb-sm">
              <Text size="text-2xl">Address</Text>
            </div>
            <Text size="text-xl" className="text-center">
              Taastrup Hovedgade 104
              <br /> 2630 Taastrup <br />
              Denmark
            </Text>
          </div>
        </div>
      </Section>
    </>
  );
}
