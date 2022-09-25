import { Flex, Avatar, Box, Link, IconButton } from "@chakra-ui/react";
import { MotionBox, MotionFlex } from "components/ui/motion";
import Header from "components/layout/header";
import Projects from "./projects";
import { useLinkColor } from "components/ui/theme";
import siteConfig from "../../configs/site-config";
import { companies, institutes, courses } from "data/data";
import About from "components/about";

const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true,
};

interface HomeProps {
  projects: project[];
  companies: any[];
  courses: any[];
  institutes: any[];
}

const Home: React.FC<HomeProps> = ({
  projects,
  companies,
  courses,
  institutes,
}) => {
  const linkColor = useLinkColor();

  return (
    <Flex direction="column" align="center">
      <Flex direction={["column", "column", "row"]}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
          m="auto"
          mb={[16, 16, "auto"]}
        >
          <Avatar
            size={"2xl"}
            // src={UserIcon}
            src={
              "https://avatars.githubusercontent.com/u/20362121?s=400&u=4e6ac269b16f14148f80da5a90a608b92e980005&v=4"
            }
          />
        </MotionBox>
        <MotionFlex
          ml={["auto", "auto", 16]}
          m={["auto", "initial"]}
          w={["90%", "85%", "80%"]}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
        >
          <Header underlineColor={ORANGE} mt={0}>
            Hi!
          </Header>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            I'm{" "}
            <Box as="strong" fontWeight="600">
              Pedro Caetano
            </Box>{" "}
            and I work as a{" "}
            <Box as="span" whiteSpace="nowrap">
              Front End Developer.
            </Box>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
            I created this page to share my projects and my professional
            experiences. 😊
          </Box>
          <Box textAlign="right">
            {siteConfig.author.accounts.map((sc, index) => (
              <IconButton
                key={index}
                as={Link}
                isExternal
                href={sc.url}
                aria-label={sc.label}
                size="lg"
                colorScheme={sc.type}
                icon={sc.icon}
                {...iconProps}
              />
            ))}
          </Box>
        </MotionFlex>
      </Flex>
      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION,
          },
        }}
      >
        <Box mt={10}>
          {/* <Stack
            mb={10}
            mx={[0, 0, 10]}
            padding={4}
            align="start"
            borderLeft="4px solid"
            borderColor={"#53c8c4"}
            color={"whatsapp"}
            _hover={{ shadow: "lg" }}
            backgroundColor={useColorModeValue("gray.100", "#1e2533")}
            rounded="sm"
            fontSize="md"
          >
            <Text textAlign="center" color="#53c8c4" fontWeight="bold">
              Highlights
            </Text>
            <UnorderedList textAlign="left" paddingLeft={5} m={0}>
              <ListItem>
                <NextLink href={'/open-source'} passHref>
                  <Link color={linkColor}>
                    Live/Local Github Repos
                  <Badge ml="1" colorScheme="green">
                      New
                  </Badge>
                  </Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href={'/tech-stack'} passHref>
                  <Link color={linkColor}>
                    Tech Stack
                </Link>
                </NextLink>
              </ListItem>
            </UnorderedList>
          </Stack> */}
          <About
            companies={companies}
            institutes={institutes}
            projects={projects}
            courses={courses}
          />
          {/* <Projects projects={projects} /> */}
        </Box>
      </MotionBox>
    </Flex>
  );
};

export default Home;
