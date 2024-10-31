import * as React from 'react'
import {Body, Container, Column, Head, Heading, Html, Preview, Row, Section, Text} from '@react-email/components'
import {TEmailFields} from '@/app/api/email/route'

export const EmailTemplate = ({subject = 'Новое заполнение формы', name, phone, email, message}: TEmailFields) => {
  return (
    <Html>
      <Head />
      <Preview>Оставили новую заявку на сайте korostelev.legal</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Row style={{paddingBottom: '0'}}>
              <Column>
                <Heading as="h2" style={{fontSize: 26, fontWeight: 'bold', textAlign: 'center', color: '#c82a22'}}>
                  {subject}
                </Heading>

                {name && (
                  <Text style={{...paragraph}}>
                    <b>Имя:</b> {name}
                  </Text>
                )}
                {email && (
                  <Text style={{...paragraph, marginTop: -5}}>
                    <b>E-mail:</b> {email}
                  </Text>
                )}
                {phone && (
                  <Text style={{...paragraph, marginTop: -5}}>
                    <b>Телефон:</b> {phone}
                  </Text>
                )}

                {message && (
                  <Text style={paragraph}>
                    <b>Комментарий:</b> {message}
                  </Text>
                )}
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default EmailTemplate

const main = {
  backgroundColor: '#fff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const paragraph = {
  fontSize: 16,
}

const content = {
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '3px',
  overflow: 'hidden',
}
