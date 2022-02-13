'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-simple-login documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-5b6aa81ea35e8ce1be12f7f4be0e5a26d745d2ba53c0d09a517aa65b5fedfbc73c689803f30f9f36e195ce0b38f682723e0b31a28a71729fcf7c801f5138773b"' : 'data-target="#xs-controllers-links-module-AppModule-5b6aa81ea35e8ce1be12f7f4be0e5a26d745d2ba53c0d09a517aa65b5fedfbc73c689803f30f9f36e195ce0b38f682723e0b31a28a71729fcf7c801f5138773b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-5b6aa81ea35e8ce1be12f7f4be0e5a26d745d2ba53c0d09a517aa65b5fedfbc73c689803f30f9f36e195ce0b38f682723e0b31a28a71729fcf7c801f5138773b"' :
                                            'id="xs-controllers-links-module-AppModule-5b6aa81ea35e8ce1be12f7f4be0e5a26d745d2ba53c0d09a517aa65b5fedfbc73c689803f30f9f36e195ce0b38f682723e0b31a28a71729fcf7c801f5138773b"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-5b6aa81ea35e8ce1be12f7f4be0e5a26d745d2ba53c0d09a517aa65b5fedfbc73c689803f30f9f36e195ce0b38f682723e0b31a28a71729fcf7c801f5138773b"' : 'data-target="#xs-injectables-links-module-AppModule-5b6aa81ea35e8ce1be12f7f4be0e5a26d745d2ba53c0d09a517aa65b5fedfbc73c689803f30f9f36e195ce0b38f682723e0b31a28a71729fcf7c801f5138773b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-5b6aa81ea35e8ce1be12f7f4be0e5a26d745d2ba53c0d09a517aa65b5fedfbc73c689803f30f9f36e195ce0b38f682723e0b31a28a71729fcf7c801f5138773b"' :
                                        'id="xs-injectables-links-module-AppModule-5b6aa81ea35e8ce1be12f7f4be0e5a26d745d2ba53c0d09a517aa65b5fedfbc73c689803f30f9f36e195ce0b38f682723e0b31a28a71729fcf7c801f5138773b"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-d1683ad964367302d82a067f5340dcd1bbc7a80df664b705425555eb15d10ab050cf60098db9dc1b820246d2ab67d48d80c0b11f7cf96dd1542995a9b59c410d"' : 'data-target="#xs-controllers-links-module-AuthModule-d1683ad964367302d82a067f5340dcd1bbc7a80df664b705425555eb15d10ab050cf60098db9dc1b820246d2ab67d48d80c0b11f7cf96dd1542995a9b59c410d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-d1683ad964367302d82a067f5340dcd1bbc7a80df664b705425555eb15d10ab050cf60098db9dc1b820246d2ab67d48d80c0b11f7cf96dd1542995a9b59c410d"' :
                                            'id="xs-controllers-links-module-AuthModule-d1683ad964367302d82a067f5340dcd1bbc7a80df664b705425555eb15d10ab050cf60098db9dc1b820246d2ab67d48d80c0b11f7cf96dd1542995a9b59c410d"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-d1683ad964367302d82a067f5340dcd1bbc7a80df664b705425555eb15d10ab050cf60098db9dc1b820246d2ab67d48d80c0b11f7cf96dd1542995a9b59c410d"' : 'data-target="#xs-injectables-links-module-AuthModule-d1683ad964367302d82a067f5340dcd1bbc7a80df664b705425555eb15d10ab050cf60098db9dc1b820246d2ab67d48d80c0b11f7cf96dd1542995a9b59c410d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-d1683ad964367302d82a067f5340dcd1bbc7a80df664b705425555eb15d10ab050cf60098db9dc1b820246d2ab67d48d80c0b11f7cf96dd1542995a9b59c410d"' :
                                        'id="xs-injectables-links-module-AuthModule-d1683ad964367302d82a067f5340dcd1bbc7a80df664b705425555eb15d10ab050cf60098db9dc1b820246d2ab67d48d80c0b11f7cf96dd1542995a9b59c410d"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EncryptionUtils.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EncryptionUtils</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-97b37057ff8ad57d5be4915b3a4441a95a8d8b2fc8dea4d95973b85644eec7d83ede25b92e9cadefe60d5d80ec1f8400be48634f7047dd22bfb14c710fed36ab"' : 'data-target="#xs-controllers-links-module-UsersModule-97b37057ff8ad57d5be4915b3a4441a95a8d8b2fc8dea4d95973b85644eec7d83ede25b92e9cadefe60d5d80ec1f8400be48634f7047dd22bfb14c710fed36ab"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-97b37057ff8ad57d5be4915b3a4441a95a8d8b2fc8dea4d95973b85644eec7d83ede25b92e9cadefe60d5d80ec1f8400be48634f7047dd22bfb14c710fed36ab"' :
                                            'id="xs-controllers-links-module-UsersModule-97b37057ff8ad57d5be4915b3a4441a95a8d8b2fc8dea4d95973b85644eec7d83ede25b92e9cadefe60d5d80ec1f8400be48634f7047dd22bfb14c710fed36ab"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-97b37057ff8ad57d5be4915b3a4441a95a8d8b2fc8dea4d95973b85644eec7d83ede25b92e9cadefe60d5d80ec1f8400be48634f7047dd22bfb14c710fed36ab"' : 'data-target="#xs-injectables-links-module-UsersModule-97b37057ff8ad57d5be4915b3a4441a95a8d8b2fc8dea4d95973b85644eec7d83ede25b92e9cadefe60d5d80ec1f8400be48634f7047dd22bfb14c710fed36ab"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-97b37057ff8ad57d5be4915b3a4441a95a8d8b2fc8dea4d95973b85644eec7d83ede25b92e9cadefe60d5d80ec1f8400be48634f7047dd22bfb14c710fed36ab"' :
                                        'id="xs-injectables-links-module-UsersModule-97b37057ff8ad57d5be4915b3a4441a95a8d8b2fc8dea4d95973b85644eec7d83ede25b92e9cadefe60d5d80ec1f8400be48634f7047dd22bfb14c710fed36ab"' }>
                                        <li class="link">
                                            <a href="injectables/UserDao.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserDao</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Constant.html" data-type="entity-link" >Constant</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EncryptionUtils.html" data-type="entity-link" >EncryptionUtils</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserDao.html" data-type="entity-link" >UserDao</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});