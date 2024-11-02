/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import {
  StepsContainer,
  Button,
  RadioGroup,
  ReturnButton,
  Image,
  BoxImage,
} from "./styles";
import { Flex, Heading, Text } from "@pandora-box-tecadi/desing-ui-react";

const options = [
  {
    label: "Receitas para Alimentação e Sucos",
    value: "revenues",
    options: [
      "Recuperação Muscular",
      "Detóx",
      "Digestão",
      "Colesterol",
      "Diabetes",
      "Pressão Alta",
    ],
  },
  {
    label: "Frutas, Verduras e Legumes",
    value: "spices",
    options: ["Ansiedade", "Depressão"],
  },
  {
    label: "Temperos e Ervas",
    value: "treatments",
    options: ["Recuperação Muscular", "Detóx", "Digestão", "Imunidade"],
  },
];

export function FormGuide() {
  const [showForm, setShowForm] = useState(false);

  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);

  const [stepContent, setStepContent] = useState<{
    title: string;
    description: string;
  }>({
    title: "Selecionar Categoria",
    description:
      "O primeiro será definir o que você deseja descobrir, novas receitas, sucos ou temperos utilizados para sua melhora.",
  });

  const [formValues, setFormValues] = useState<{
    path: string;
    pathItem: string;
  }>({
    path: "revenues",
    pathItem: "Colesterol",
  });

  const [pathList, setPathList] = useState<string[]>(options[0].options);

  const steps = [
    {
      title: "Categoria",
      content: (
        <Flex
          style={{
            padding: "1rem",
            minHeight: "360px",
          }}
          direction="column"
        >
          <RadioGroup
            name="path"
            value={formValues.path}
            defaultValue={formValues.path}
            options={options}
            onChange={(e) => {
              setFormValues({
                ...formValues,
                path: e.target.value,
                pathItem: options.find((item) => item.value === e.target.value)
                  ?.options[0] as string,
              });

              const selectedOption = options.find(
                (item) => item.value === e.target.value
              );

              if (selectedOption) {
                setPathList(selectedOption.options);
              }
            }}
            optionType="button"
            buttonStyle="solid"
          />
        </Flex>
      ),
    },
    {
      title: "Item",
      content: (
        <Flex
          style={{
            padding: "1rem",
            minHeight: "360px",
          }}
        >
          <RadioGroup
            name="pathItem"
            value={formValues.pathItem}
            defaultValue={formValues.pathItem}
            itemsMode="grid"
            options={pathList.map((item) => ({
              label: item,
              value: item,
            }))}
            onChange={(e) => {
              setFormValues({
                ...formValues,
                pathItem: e.target.value,
              });
            }}
            optionType="button"
            buttonStyle="solid"
          />
        </Flex>
      ),
    },
    {
      title: "Resultado",
      content: (
        <Flex
          style={{
            padding: "1rem",
            minHeight: "360px",
          }}
        >
          <p>Formulário finalizado</p>
        </Flex>
      ),
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }, []);

  const next = () => {
    setCurrent(current + 1);

    if (current === 0) {
      setStepContent({
        title: "Selecionar Item",
        description:
          "Agora escolha o item que deseja descobrir mais informações.",
      });
    } else if (current === 1) {
      setStepContent({
        title: "Finalizar",
        description: "Agora finalize o processo.",
      });
    } else {
      setStepContent({
        title: "Selecionar Categoria",
        description:
          "O primeiro será definir o que você deseja descobrir, novas receitas, sucos ou temperos utilizados para sua melhora.",
      });
    }
  };

  const prev = () => {
    if (current === 1) {
      setStepContent({
        title: "Selecionar Categoria",
        description:
          "O primeiro será definir o que você deseja descobrir, novas receitas, sucos ou temperos utilizados para sua melhora.",
      });
    } else if (current === 2) {
      setStepContent({
        title: "Selecionar Item",
        description:
          "Agora escolha o item que deseja descobrir mais informações.",
      });
    } else {
      setStepContent({
        title: "Finalizar",
        description: "Agora finalize o processo.",
      });
    }

    if (current === 0) {
      setShowForm(false);

      setStepContent({
        title: "Selecionar Categoria",
        description:
          "O primeiro será definir o que você deseja descobrir, novas receitas, sucos ou temperos utilizados para sua melhora.",
      });
    } else {
      setCurrent(current - 1);
    }
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",
    color: "#e4e4e7",
    backgroundColor: "#27272a",
    borderRadius: "8px",
    marginTop: 16,
  };

  function handleFinish() {
    setLoading(false);
    message.success("Processing complete!");
    setCurrent(0);

    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }
  return (
    <>
      {showForm ? (
        <>
          <StepsContainer current={current} items={items} />
          <Flex
            direction="column"
            style={{
              lineHeight: "1.5rem",
              gap: "2rem",
              padding: "3.2rem 2rem",
            }}
            align="center"
          >
            <Heading size="2xl">{stepContent.title}</Heading>
            <Text>{stepContent.description}</Text>
          </Flex>
          <div style={contentStyle}>
            {loading ? (
              <>{steps[current].content}</>
            ) : (
              <Spin
                indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
              />
            )}
          </div>
          <Flex style={{ marginTop: "4rem" }} align="center" justify="center">
            <ReturnButton style={{ margin: "0 8px" }} onClick={() => prev()}>
              Voltar
            </ReturnButton>

            {current < steps.length - 1 && (
              <Button type="primary" size="large" onClick={() => next()}>
                Avançar
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                size="large"
                onClick={() => handleFinish()}
              >
                Finalizar
              </Button>
            )}
          </Flex>
        </>
      ) : (
        <Flex
          direction="column"
          style={{
            padding: "1rem",
            minHeight: "360px",
          }}
          align="center"
          justify="center"
          gap="32px"
        >
          <Flex direction="column" align="center" justify="center" gap="12px">
            <Heading size="2xl">Formulário de Guia</Heading>
            <Text>
              Clique no botão abaixo para iniciar o formulário de guia.
            </Text>
          </Flex>

          <Flex gap="26px" align="center" justify="center">
            <BoxImage onClick={() => setShowForm(true)}>
              <Image src="/src/assets/man.webp" />

              <Flex direction="column">
                <Heading size="xl">
                  Frutas, Verduras, Legumes e Temperos
                </Heading>
                <Text>
                  Entenda os benefícios de frutas, verduras, legumes e temperos.
                </Text>
              </Flex>
            </BoxImage>
            <BoxImage onClick={() => setShowForm(true)}>
              <Image src="/src/assets/woman.webp" />

              <Flex direction="column">
                <Heading size="xl">Alimentação, Sucos e Chás</Heading>
                <Text>
                  Descubra os benefícios de uma boa alimentação, sucos e chás.
                </Text>
              </Flex>
            </BoxImage>
          </Flex>
        </Flex>
      )}
    </>
  );
}
