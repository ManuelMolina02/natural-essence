/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  Button,
  ReturnButton,
  Image,
  BoxImage,
  Table,
  Link,
  BoxLink,
} from "./styles";
import { Flex, Heading, Text } from "@pandora-box-tecadi/desing-ui-react";
import { OptionsList } from "./components/RadioGroup";
import { seasoning, SeasoningProps } from "../../data/data";
import { IoLogoWhatsapp } from "react-icons/io";
import { Loader } from "./components/Loading";

const options = [
  {
    label: "Receitas para Alimentação e Sucos",
    value: "revenues",
    options: [
      "Recuperação Muscular",
      "Digestão",
      "Colesterol",
      "Diabetes",
      "Pressão Alta",
      "Imunidade",
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
    options: ["Recuperação Muscular", "Digestão", "Imunidade"],
  },
];

export function FormGuide() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const [data, setData] = useState(seasoning);

  function formatFilter(value: string) {
    const regex = /[^a-zA-Z0-9]/g;
    return value ? value.normalize("NFD").replace(regex, "").toLowerCase() : "";
  }

  useEffect(() => {
    if (currentStep === 3) {
      const illness = formatFilter(formData.illness);

      const list = seasoning.filter((item: any) => {
        const benefits = formatFilter(item.benefits);
        return benefits.includes
          ? benefits.includes(illness)
          : benefits === illness;
      });
      setData(list);
    }
  }, [currentStep]);

  const [formData, setFormData] = useState<{
    category: "revenues" | "spices" | "";
    illness: string;
    list: string[];
  }>({
    category: "",
    illness: "",
    list: [],
  });

  function prevStep() {
    if (currentStep === 1) return;

    setLoading(true);
    setCurrentStep((prev) => prev - 1);

    setTimeout(() => {
      setLoading(false);
    }, 250);
  }

  function nextStep() {
    if (currentStep === 3) return;
    setLoading(true);
    setCurrentStep((prev) => prev + 1);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  function sendMessage() {
    if (!window) {
      return;
    } else {
      const numberWhats = "5548996462015";

      const benefitsList = data.map(
        (item: SeasoningProps) => `${item.name} - ${item.benefits}`
      );

      const text = `Olá segue sua lista de ${
        formData.category === "revenues" ? "Verduras" : "Frutas"
      }\n\n ${benefitsList.join("\n")}`;
      window.open(
        `https://api.whatsapp.com/send?phone=${numberWhats}&text=${window.encodeURIComponent(
          text
        )}`
      );
    }
  }

  return (
    <>
      {currentStep === 3 && (
        <BoxLink>
          <Link target="_blank" onClick={sendMessage}>
            <IoLogoWhatsapp size={22} />
            Enviar por Whatsapp
          </Link>
          {/*
          <Link  target="_blank">
            <FaArrowAltCircleDown size={22} />
            Download
          </Link>
          */}
        </BoxLink>
      )}
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
          <Text>Clique no botão abaixo para iniciar o formulário de guia.</Text>
        </Flex>

        {currentStep === 1 && !loading && (
          <Flex gap="26px" align="center" justify="center">
            <BoxImage
              onClick={() => setFormData({ ...formData, category: "revenues" })}
              activeItem={formData.category === "revenues"}
            >
              <Image src="/assets/man.webp" />

              <Flex direction="column">
                <Heading size="5xl">Verduras</Heading>
                <Text>
                  Entenda os benefícios de frutas, verduras, legumes e temperos.
                </Text>
              </Flex>
            </BoxImage>
            <BoxImage
              activeItem={formData.category === "spices"}
              onClick={() => setFormData({ ...formData, category: "spices" })}
            >
              <Image src="/assets/fruits.webp" />

              <Flex direction="column">
                <Heading size="5xl">Frutas</Heading>
                <Text>
                  Descubra os benefícios de uma boa alimentação, sucos e chás.
                </Text>
              </Flex>
            </BoxImage>
          </Flex>
        )}

        {currentStep === 2 && !loading && (
          <>
            <Flex gap="26px" align="center" justify="center">
              <OptionsList
                valueActive={formData.illness}
                setValue={(value) =>
                  setFormData({ ...formData, illness: value })
                }
                list={
                  options.find((item) => item.value === formData.category)
                    ?.options || []
                }
              />
            </Flex>
          </>
        )}

        {currentStep === 3 && !loading && (
          <Flex gap="26px" direction="column">
            <Table>
              <tr>
                <th>Nome</th>
                <th>Benefícios</th>
              </tr>
              {data
                .sort((a: SeasoningProps, b: SeasoningProps) =>
                  a.name.localeCompare(b.name)
                )
                .map((item: SeasoningProps) => (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.benefits}</td>
                  </tr>
                ))}
            </Table>
          </Flex>
        )}

        {loading && <Loader />}
      </Flex>

      <Flex style={{ marginTop: "4rem" }} align="center" justify="center">
        <ReturnButton
          style={{ margin: "0 8px" }}
          disabled={currentStep === 1}
          onClick={prevStep}
        >
          Voltar
        </ReturnButton>

        {currentStep < 3 && (
          <Button
            type="primary"
            size="large"
            onClick={nextStep}
            disabled={
              (currentStep === 1 && !formData.category) ||
              (currentStep === 2 && !formData.illness)
            }
          >
            Avançar
          </Button>
        )}
        {currentStep === 3 && (
          <Button type="primary" size="large">
            Finalizar
          </Button>
        )}
      </Flex>
    </>
  );
}
