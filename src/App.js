import logo from './logo.svg';
import './App.css';

import { Flex, Button, Text, View, withAuthenticator, TextField } from "@aws-amplify/ui-react";

import {
  Header1, Header, AltSearch, LCstatusCheck, BOMCheck,
  AltPartRecommendationUpdateForm, AltPartRecommendationCreateForm,
  Desktop1Collection, Frame3Collection, Frame4Collection, EOLCollection, ROHSCollection, LifeCycleStatusCollection,
  DBCheckCollection
} from './ui-components';

import {
  ComponentBox, Frame3, Frame4, EOL,
  BOMReportB, DBCheckB, AltPartSearchB, DBUpdateB, ROHSB, LifecycleStatusB, EOLB
} from './ui-components';

import { AltPartRecommendation } from './ui-components';
import { useState } from 'react';

const DEFAULT_PADDING = { bottom: 400, };
const DEFAULT_ZOOM = 13;

function App() {

  const [selected, setSelected] = useState(null);
  const [createMode1, setCreateMode1] = useState();
  const [createMode2, setCreateMode2] = useState();
  const [createMode3, setCreateMode3] = useState();
  const [createMode4, setCreateMode4] = useState();
  const [createMode5, setCreateMode5] = useState();
  const [createMode6, setCreateMode6] = useState();
  const [createMode7, setCreateMode7] = useState();
  console.log(selected)

  return (
    //<h1>Hello World</h1>
    //<h1>Hello World</h1>
    <div className="App">
      <Header width={'100vw'} />

      {createMode1 ? (
        <Flex justifyContent={'center'}>
          <div className="form-wrapper-inner">
            <h1>Alternate Part Search</h1>
            <Frame4Collection />
            <Button onClick={() => setCreateMode1(false)}>Go Back</Button>
          </div>
        </Flex>
      ) : createMode2 ? (
        <Flex justifyContent={'center'}>
          <div className="form-wrapper-inner">
            <h1>EOL Status Report</h1>
            <EOLCollection />
            <Button onClick={() => setCreateMode2(false)}>Go Back</Button>
          </div>
        </Flex>
      ) :
        createMode3 ? (
          <Flex justifyContent={'center'}>
            <div className="form-wrapper-inner">
              <h1>LifeCycle Status Report</h1>
              <LifeCycleStatusCollection />
              <Button onClick={() => setCreateMode3(false)}>Go Back</Button>
            </div>
          </Flex>
        ) :
          createMode4 ? (
            <Flex justifyContent={'center'}>
              <div className="form-wrapper-inner">
                <h1>ROHS Status Report</h1>
                <ROHSCollection />
                <Button onClick={() => setCreateMode4(false)}>Go Back</Button>
              </div>
            </Flex>
          ) :
            createMode5 ? (
              <Flex justifyContent={'center'}>
                <div className="form-wrapper-inner">
                  <h1>DB All Parts Report</h1>
                  <DBCheckCollection />
                  <Button onClick={() => setCreateMode5(false)}>Go Back</Button>
                </div>
              </Flex>
            ) :
              createMode6 ? (
                <Flex justifyContent={'center'}>
                  <div className="form-wrapper-inner">
                    <h1>Add new DB Parts</h1>
                    <AltPartRecommendationCreateForm />
                    <Button onClick={() => setCreateMode6(false)}>Cancel</Button>
                  </div>
                </Flex>
              ) :
                createMode7 ? (
                  <Flex justifyContent={'center'}>
                    <div className="form-wrapper-inner">
                      <h1>Uplaod BOM and get the Report</h1>

                      <Button onClick={() => setCreateMode7(false)}>Go Back</Button>
                    </div>
                  </Flex>
                ) :


                  (
                    <Flex overflow="auto">
                      <View className="altPartRecommendation-menu">
                        <Flex direction="Column" gap="5rem">
                          <Flex direction="Row" gap="5rem">
                            <Button onClick={() => setCreateMode1(true)}><AltPartSearchB /></Button>
                            <Button onClick={() => setCreateMode2(true)}><EOLB /></Button>
                          </Flex>

                          <Flex direction="Row" gap="5rem">
                            <Button onClick={() => setCreateMode3(true)}><LifecycleStatusB /></Button>
                            <Button onClick={() => setCreateMode4(true)}><ROHSB /></Button>
                          </Flex>

                          <Flex direction="Column" gap="5rem">
                            <Flex direction="Row" gap="5rem">
                              <Button onClick={() => setCreateMode5(true)}><DBCheckB /></Button>
                              <Button onClick={() => setCreateMode6(true)}><DBUpdateB /></Button>
                            </Flex>

                            <Flex direction="Row" gap="5rem">
                              <Button onClick={() => setCreateMode7(true)}><BOMReportB /></Button>
                            </Flex>

                          </Flex>
                          </Flex>

                      </View>


                    </Flex>

                  )}
    </div>

  );
}

export default withAuthenticator(App);
