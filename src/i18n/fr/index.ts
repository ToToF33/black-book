import type { BaseTranslation } from '../i18n-types'

const fr = {
  nativeName: 'Français',
  commands: {
    about: {
      name: 'aperçu',
      description: 'obtenir des informations générales sur le bot',
      options: {}
    },
    codex: {
      name: 'codex',
      description: 'trouver un aspect du codex avec son nom',
      options: {
        codexEntryNameOption: {
          name: 'nom',
          description: `nom de l'aspect du codex`,
        }
      },
      errors: {
        notFound: 'aspect non trouvé',
      }
    },
    config: {
      name: 'configurer',
      description: 'modifier et voir votre configuration actuelle',
      options: {
        locale: {
          name: 'locale',
          description: 'définit la langue locale du bot sur ce serveur'
        }
      },
    },
    events: {
      name: 'événements',
      description: `recevoir des mises à jour sur les marées infernales et les bosses de monde`,
      options: {
        helltide: {
          name: 'vague-infernale',
          description: `recevoir des alertes sur les prochaines vagues infernales (valeur par défaut est 'vrai')`,
        },
        worldBoss: {
          name: 'world-boss',
          description: `recevoir des alertes sur les prochains bosses de monde (valeur par défaut est 'vrai')`,
        },
        zoneEvent: {
          name: 'événement-de-zone',
          description: `recevoir des alertes sur les prochains événements de zone (valeur par défaut est 'vrai')`,
        },
        helltideRole: {
          name: 'rôle-de-vague-infernale',
          description: 'défini un utilisateur ou rôle pour être alerté sur les prochaines vagues infernales',
        },
        worldBossRole: {
          name: 'rôle-de-world-boss',
          description: 'défini un utilisateur ou rôle pour être alerté sur les prochains boss mondiaux',
        },
        zoneEventRole: {
          name: 'rôle-de-événement-zone',
          description: 'défini un utilisateur ou rôle pour être alerté sur les prochains événements de zone',
        },
        allEventRole: {
          name: 'rôle-de-tous-les-événements',
          description: 'défini un utilisateur ou rôle pour être alerté sur tous les événements',
        },
        images: {
          name: 'images',
          description: 'montrer des images dans les alertes',
        },
        deleteMessages: {
          name: 'effacer-événements-expirés',
          description: `effacer les notifications d'événements de le canal depuis de que l'événement est terminé`,
        },
      },
      errors: {
        permissions: `Le bot actuellement n'a pas les permissions "Envoyer Messages" et "Voir Messages" pour ce canal, donc il ne peut pas envoyer d'alertes. Aprés leur autorisation, réexécuter cette commande!`,
      },
      messages: {
        success: `Les événements seront publiés dans ce canal! Utiliser `/{unsub}` pour arrêter les publications d'événements ici. Utiliser la commande `/{events}` de nouveau pour changer votre configuration.`,
      }
    },
    helltide: {
      name: 'hell-tide',
      description: 'montrer la carte et les informations sur les vagues infernales',
      options: {}
    },
    help: {
      name: 'aide',
      description: 'montrer une liste des commandes disponibles',
      options: {}
    },
    invite: {
      name: 'inviter',
      description: `obtenir le lien d'invitation du bot et ajoute-le à d'autres serveurs`,
      options: {}
    },
    nightmareLevel: {
      name: 'nightmare-level',
      description: 'calculer le niveau optimal du donjon du cauchemar pour votre personnage',
      options: {
        level: {
          name: 'niveau',
          description: 'le niveau de votre personnage'
        },
        worldTier: {
          name: 'niveau-de-monde',
          description: `votre niveau de monde (par défaut c'est 4)`
        },
      }
    },
    nightmareTier: {
      name: 'niveaux-cauchemar',
      description: `montrer une liste des niveaux d'efficacité de donjons du cauchemar`,
      options: {}
    },
    paragon: {
      name: 'parangon',
      description: 'trouver une grille de parangon par son nom',
      options: {
        entryName: {
          name: 'nom',
          description: `nom de la grille de paragon`,
        }
      },
      errors: {
        notFound: 'grille de paragon non trouvée!',
      },
    },
    panel: {
      name: 'panneau',
      description: 'créer un panneau qui montre le planning des événements mondiaux',
      options: {},
    },
    season: {
      name: 'saison',
      description: 'obtenir des informations sur la saison prochaine/actuelle',
      options: {},
    },
    skill: {
      name: 'compétence',
      description: 'trouver une compétence par son nom',
      options: {
        skillName: {
          name: 'nom',
          description: 'nom de la compétence'
        }
      },
      errors: {
        notFound: 'compétence non trouvée!',
      },
    },
    unsub: {
      name: 'désabonner',
      description: `annuler l'abonnement sur les nouvelles vagues infernales et boss mondiaux`,
      options: {
				channelId: {
					name: 'canal',
					description: 'canal ID'
				}
			}
    },
    xpCurve: {
      name: 'courbe-xp',
      description: `montrer des informations sur la courbe d'expérience`,
      options: {}
    }
  },
  views: {
    events: {
      hellide: {
        title: 'La Vague Infernale sévit sur {location}!',
        updatePending: ` (l'image sera actualisée) `,
        updateDone: ' (image actualisée)',
        noImage: ` (image non disponible - il s'agit probablement d'une panne de service qui devrait bientôt être résolue)`,
        chestsRespawnLabel: 'Les coffres réapparaissent:',
        startLabel: 'Début:',
        endLabel: 'Fin:',
        locationUrl: 'Lieux des coffres à {location}'
      },
      worldBoss: {
        title: `{name} est apparu à {location}!`,
        spawnLabel: 'Spawn:'
      },
      zoneEvent: {
        title: 'Début de la mobilisation des légions à {location}!',
        startLabel: 'Début:'
      },
      utility: {
        zoneAndTerritory: '{territory}, {zone}'
      }
    }
  },
  gameData: {
    worldBosses: {
      avarice: 'Avarice',
      theWanderingDeath: 'Mort Vagabonde',
      ashava: 'Ashava',
    },
    map: {
      sanctuary: 'Sanctuaire',
      territories: {
        dilapidatedAqueducts: 'Aqueducs Délabrés',
        hauntedWreckage: 'Épave Hantée',
        templeOfRot: 'Temple de la Putréfaction',
        norgoiVigil: 'Veillée de Norgoi',
        korDragan: 'Kor Dragan',
        saraanCaldera: 'Caldera de Saraan',
        crusadersMonument: `Monument des Croisés`,
        caenAdar: 'Caen Adar',
        fieldsOfDesecration: 'Silons de la Profanation',
        searedBasin: 'Bassin Calciné',
        theCrucible: 'Le Creuset',
				carrowcrestRuins: 'Ruines de la Crête-du-Flambeur',
				alcarnus: 'Alcarnus',
      },
      zones: {
        kehjistan: 'Kehjistan',
        hawezar: 'Hawezar',
        scosglen: 'Scosglen',
        fracturedPeaks: 'Pics Brisés',
        drySteppes: 'Steppes Arides',
      }
    }
  }
} satisfies BaseTranslation

export default fr
